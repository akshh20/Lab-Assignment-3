import StudentRow from './StudentRow'

function StudentTable({ students, onScoreSave, onDeleteStudent }) {
	return (
		<div className="table-wrapper">
			<table className="student-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Score</th>
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{students.map((student) => (
						<StudentRow
							key={student.id}
							student={student}
							onScoreSave={onScoreSave}
							onDeleteStudent={onDeleteStudent}
						/>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default StudentTable
