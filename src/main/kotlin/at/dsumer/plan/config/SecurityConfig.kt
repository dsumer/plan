package at.dsumer.plan.config

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity

@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
class SecurityConfig {
    @Autowired
    @Throws(Exception::class)
    fun configureGlobal(auth: AuthenticationManagerBuilder) {
        auth.inMemoryAuthentication().withUser("user").password("password").roles("USER")
    }
}