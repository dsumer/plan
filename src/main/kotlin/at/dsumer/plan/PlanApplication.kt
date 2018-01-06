package at.dsumer.plan

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.ComponentScan

@ComponentScan("at.dsumer.plan.config")
@SpringBootApplication
class PlanApplication

fun main(args: Array<String>) {
    SpringApplication.run(PlanApplication::class.java, *args)
}
