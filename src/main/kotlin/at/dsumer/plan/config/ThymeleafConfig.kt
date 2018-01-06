package at.dsumer.plan.config

import nz.net.ultraq.thymeleaf.LayoutDialect
import org.springframework.context.MessageSource
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.support.ReloadableResourceBundleMessageSource
import org.thymeleaf.TemplateEngine
import org.thymeleaf.extras.springsecurity4.dialect.SpringSecurityDialect
import org.thymeleaf.spring4.SpringTemplateEngine

@Configuration
class ThymeleafConfig {
    @Bean
    fun layoutDialect(): LayoutDialect {
        return LayoutDialect()
    }

    @Bean
    fun templateEngine(): TemplateEngine {
        val templateEngine = SpringTemplateEngine()
        templateEngine.addDialect(SpringSecurityDialect())
        templateEngine.addDialect(LayoutDialect())
        return templateEngine
    }

    @Bean
    fun messageSource(): MessageSource {
        val messageSource = ReloadableResourceBundleMessageSource()
        messageSource.setBasenames("classpath:messages/messages")
        // if true, the key of the message will be displayed if the key is not
        // found, instead of throwing a NoSuchMessageException
        messageSource.setUseCodeAsDefaultMessage(true)
        messageSource.setDefaultEncoding("UTF-8")
        // # -1 : never reload, 0 always reload
        messageSource.setCacheSeconds(0)
        return messageSource
    }
}
