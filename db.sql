CREATE TABLE `department` (
`dept` varchar(30) NOT NULL,
`dept_name` varchar(45) NOT NULL,
PRIMARY KEY (`dept`)
)
CREATE TABLE `student` (
`name` int NOT NULL,
`roll_no` varchar(45) NOT NULL,
`program` varchar(45) NOT NULL,
`year` date NOT NULL,
`dept` varchar(30) NOT NULL,
PRIMARY KEY (`roll_no`),
KEY `dept_idx` (`dept`),
CONSTRAINT `dept` FOREIGN KEY (`dept`) REFERENCES `department` (`dept`)
)
CREATE TABLE `course` (
`course_name` int NOT NULL,
`course_id` varchar(45) NOT NULL,
`credits` int NOT NULL,
`dept1` varchar(45) NOT NULL,
PRIMARY KEY (`course_id`),
UNIQUE KEY `course_name_UNIQUE` (`course_name`),
KEY `dept1_idx` (`dept1`),
CONSTRAINT `dept1` FOREIGN KEY (`dept1`) REFERENCES `department` (`dept`)
)
CREATE TABLE `grades` (
`roll_no` varchar(45) NOT NULL,
`course_id` varchar(45) NOT NULL,`grade` varchar(5) NOT NULL,
PRIMARY KEY (`roll_no`,`course_id`),
KEY `course_id_idx` (`course_id`),
CONSTRAINT `course_id` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
CONSTRAINT `roll_no` FOREIGN KEY (`roll_no`) REFERENCES `student` (`roll_no`)
)