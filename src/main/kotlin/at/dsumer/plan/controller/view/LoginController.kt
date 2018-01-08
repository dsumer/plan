package at.dsumer.plan.controller.view

import org.springframework.security.authentication.AnonymousAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import java.security.Principal

@Controller
class LoginController {
    @GetMapping("/login")
    fun login(principal: Principal?): String {
        val isLoggedIn = principal != null && principal !is AnonymousAuthenticationToken
                && (principal as Authentication).isAuthenticated
        if (isLoggedIn) {
            return "redirect:/"
        }
        return "login"
    }
}
