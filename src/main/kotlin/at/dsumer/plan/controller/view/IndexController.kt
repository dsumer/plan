package at.dsumer.plan.controller.view

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class IndexController {

    @RequestMapping("/")
    fun home(): String {
        return "index"
    }
}