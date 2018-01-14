package at.dsumer.plan.dto

import java.time.LocalDate

data class Task(
        val id: Long,
        val name: String,
        val duration: Int,
        val durationUnit: DurationUnit,
        val nextTime: LocalDate
)