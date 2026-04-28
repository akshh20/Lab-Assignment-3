import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'

function App() {
	const [students, setStudents] = useState([
		{ id: 1, name: 'Aman', score: 78 },
		{ id: 2, name: 'Riya', score: 45 },
		{ id: 3, name: 'Neha', score: 32 },
	])

	const handleAddStudent = (name, score) => {
		const trimmedName = name.trim()
		if (!trimmedName) return

		const numericScore = Number(score)
		if (Number.isNaN(numericScore)) return

		const nextStudent = {
			id: Date.now(),
			name: trimmedName,
			score: numericScore,
		}

		setStudents((prevStudents) => [...prevStudents, nextStudent])
	}

	const handleScoreChange = (studentId, newScore) => {
		const numericScore = Number(newScore)

		setStudents((prevStudents) =>
			prevStudents.map((student) =>
				student.id === studentId
					? {
							...student,
							score: Number.isNaN(numericScore) ? 0 : numericScore,
						}
					: student,
			),
		)
	}

	const handleDeleteStudent = (studentId) => {
		setStudents((prevStudents) =>
			prevStudents.filter((student) => student.id !== studentId),
		)
	}

	return (
		<div className="app">
			<div className="scoreboard-card">
				<Header />
				<AddStudentForm onAddStudent={handleAddStudent} />
				<StudentTable
					students={students}
					onScoreSave={handleScoreChange}
					onDeleteStudent={handleDeleteStudent}
				/>
				<p className="footer-note">Keep Learning, Keep Growing!</p>
			</div>
		</div>
	)
}

export default App
