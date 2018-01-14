package at.dsumer.plan.controller.rest

import at.dsumer.plan.dto.DurationUnit
import at.dsumer.plan.dto.Task
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
@RequestMapping(value = ["/api/task"])
class TaskController {
    @RequestMapping(value = ["/list"], method = [RequestMethod.GET], produces = [MediaType.APPLICATION_JSON_VALUE])
    fun getTasks(): List<Task> {
        return listOf(
                Task(0, "Code", "abc", 4, DurationUnit.DAYS, Date()),
                Task(1, "Code 2", "qweqwe", 2, DurationUnit.WEEKS, Date())
        )
    }
}