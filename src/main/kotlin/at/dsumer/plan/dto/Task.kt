package at.dsumer.plan.dto

import java.util.Date

data class Task(
        val id: Long,
        val name: String,
        val description: String,
        val duration: Int,
        val durationUnit: DurationUnit,
        val nextTime: Date
)