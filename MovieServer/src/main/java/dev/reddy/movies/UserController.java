package dev.reddy.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        // Verifica se l'utente esiste
        Optional<User> userOptional = userService.findUserByEmail(loginRequest.getEmail());
        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found or incorrect email");
        }

        User user = userOptional.get();

        // Verifica la password
        if (!user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong password");
        }

        // Puoi aggiungere la logica per generare un token qui, se necessario

        return ResponseEntity.ok("Login successful");
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        Optional<User> existingUser = userService.findUserByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            // Se l'email è già presente, restituisci una risposta di errore
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The email is already in use.");
        }

        // Altrimenti, procedi con la registrazione
        User newUser = userService.registerUser(user);

        // Puoi aggiungere la logica per generare un token qui, se necessario

        return ResponseEntity.ok("Registration successful");
    }
}



