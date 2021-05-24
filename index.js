const day = document.querySelector('[data-value="days"]')
const hour = document.querySelector('[data-value="hours"]')
const min = document.querySelector('[data-value="mins"]')
const sec = document.querySelector('[data-value="secs"]')

class CountdownTimer {
	constructor({ targetDate }) {
		this.targetDate = targetDate
		this.timer()
		this.start()
	}

	timer() {
		const currentTime = Date.now()
		const newTime = this.targetDate - currentTime
		const { days, hours, mins, secs } = this.getTimeComponents(newTime)
		day.textContent = days
		hour.textContent = hours
		min.textContent = mins
		sec.textContent = secs
	}

	start() {
		this.timer()

		setInterval(() => {
			this.timer()
		}, 1000)
	}

	pad(value) {
		return String(value).padStart(2, '0')
	}

	getTimeComponents(time) {
		const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)))
		const hours = this.pad(
			Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		)
		const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
		const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000))

		return { days, hours, mins, secs }
	}
}

new CountdownTimer({
	selector: '#timer-1',
	targetDate: new Date('Jul 17, 2021'),
})
