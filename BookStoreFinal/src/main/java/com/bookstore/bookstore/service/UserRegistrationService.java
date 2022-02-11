package com.bookstore.bookstore.service;

import com.bookstore.bookstore.dto.LoginDto;
import com.bookstore.bookstore.dto.ResetPassword;
import com.bookstore.bookstore.dto.ResponseDTO;
import com.bookstore.bookstore.dto.UserRegistrationDTO;
import com.bookstore.bookstore.exception.UserRegistrationException;
import com.bookstore.bookstore.model.UserRegistrationModel;
import com.bookstore.bookstore.repository.UserRegistrationRepository;
import com.bookstore.bookstore.util.JMSUtil;
import com.bookstore.bookstore.util.TokenUtil;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

import java.util.Optional;

@Service
public class UserRegistrationService implements IUserRegistrationService {

	@Autowired
	private UserRegistrationRepository userRepository;

	@Autowired
	private JMSUtil jmsUtil;

	@Autowired
	private ModelMapper modelmapper;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;


	@Override
	public ResponseDTO createUser(UserRegistrationDTO userDTO) {
		Optional<UserRegistrationModel> isUserPresent = userRepository.findByEmailId(userDTO.getEmailId());
		if (!isUserPresent.isPresent()) {

			// Encoding User Entered Password and saving into database
			userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));

			UserRegistrationModel createUser = modelmapper.map(userDTO, UserRegistrationModel.class);
			createUser.setRegisteredDate(LocalDate.now());
			createUser.setUpdatedDate(LocalDate.now());
			userRepository.save(createUser);
			return new ResponseDTO("User Register Sucessfully");
		} else {
			throw new UserRegistrationException(400, "User is already Register, Please Try with another Email Id");
		}
	}

	@Override
	public ResponseDTO updateUserById(String token, int userid, UserRegistrationDTO userDTO) {
		int userId = TokenUtil.decodeToken(token);
		Optional<UserRegistrationModel> isUserPresent = userRepository.findById(userId);
		boolean userActive = isUserPresent.get().isVerify();
		if (isUserPresent.isPresent() && !userActive)
		{
			isUserPresent.get().setFullName(userDTO.getFullName());

			isUserPresent.get().setEmailId(userDTO.getEmailId());
			isUserPresent.get().setUpdatedDate(LocalDate.now());
			isUserPresent.get().setMobileNo(userDTO.getMobileNo());
			userRepository.save(isUserPresent.get());
			return new ResponseDTO("User Updated Successfully");
		}
		else
		{
			throw new UserRegistrationException(400,"User is already Register, Please Try with another Email Id");
		}
	}

	@Override
	public ResponseDTO deleteUserById(String token, int userid) {
		int userId = TokenUtil.decodeToken(token);
		Optional<UserRegistrationModel> isUserPresent = userRepository.findById(userId);
		if (isUserPresent.isPresent())
		{
			isUserPresent.get().setVerify(true);
			return new ResponseDTO("User Deleted Successfully");
		}
		else
		{
			throw new UserRegistrationException(400,"User is already Register, Please Try with another Email Id");
		}
	}


	@Override
	public ResponseDTO loginUser(LoginDto loginDto)
	{
		Optional<UserRegistrationModel> isUserPresent = userRepository.findByEmailId(loginDto.emailId);
 	 	String pass = passwordEncoder.encode(loginDto.getPassword());
		boolean isMatches = passwordEncoder.matches(loginDto.getPassword(),isUserPresent.get().getPassword());
		boolean userActive = isUserPresent.get().isVerify();
		if (isUserPresent.isPresent() && !userActive)
		{
			if (isUserPresent.get().getEmailId().equals(loginDto.emailId) && isMatches)
			{
				String token = TokenUtil.createToken(isUserPresent.get().getId());
				return new ResponseDTO("Login is Sucessfully", token,isUserPresent);
			}
			else
			{
				throw new UserRegistrationException(400,"Please check Email Id or Password, Retry");
			}
		}
		else
		{
			throw new UserRegistrationException(400,"User is already Register, Please Try with another Email Id");
		}
	}

	@Override
	public ResponseDTO forgotPassword(String email)
	{
		Optional<UserRegistrationModel> isUserPresent = userRepository.findByEmailId(email);
		if (isUserPresent.isPresent())
		{
			String body = "http://localhost:4200/resetpassword/"+ TokenUtil.createToken(isUserPresent.get().getId());
			jmsUtil.sendEmail(isUserPresent.get().getEmailId(), "Reset Password", body);
			return new ResponseDTO("Reset password link sent to your email "+ email );
		}
		else
		{
			return new ResponseDTO("Your Email "+email+ " is not registered with us ");
		}

	}

	@Override
	public Boolean verify(String token)
	{
		int userId = TokenUtil.decodeToken(token);
		Optional<UserRegistrationModel> isUserPresent = userRepository.findById(userId);
		if (isUserPresent != null)
		{
			return true;

		}
		else
		{
			return false;
		}
	}


	@Override
	public int getUserId(String token)
	{
		int userId = TokenUtil.decodeToken(token);
		Optional<UserRegistrationModel> isUserPresent = userRepository.findById(userId);
		if(isUserPresent.isPresent())
		{
			return userId;
		}
		else
		{
			throw new UserRegistrationException(400,"User is already Register, Please Try with another Email Id");
		}
	}

	@Override
	public ResponseDTO resetPassword(ResetPassword password, String token)
	{
		int userId = TokenUtil.decodeToken(token);
		Optional<UserRegistrationModel> isUserPresent = userRepository.findById(userId);
		if (isUserPresent.isPresent())
		{
			isUserPresent.get().setPassword(passwordEncoder.encode(password.getPassword()));
			isUserPresent.get().setUpdatedDate(LocalDate.now());

			userRepository.save(isUserPresent.get());
			return new ResponseDTO("Password updated successfully");
		}
		else
		{
			throw new UserRegistrationException(400,"Password reset failed");
		}
	}
}
