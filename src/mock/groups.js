import {groupStudents} from "./students.js";

const rows = [
    {
        id: 1,
        title: "Dasturlash",
        groups: [
            {
                id: 1,
                title: "Frontend",
                level: "Beginner",
                started: true,
                location: "Chilonzor Toshkent, Uzbekistan",
                filial: "Chilonzor",
                timeline: "Dushanba - Chorshanba - Juma",
                time: "14:00 - 16:00",
                students: groupStudents
            },
            {
                id: 2,
                title: "Backend",
                level: "Elementary",
                started: false,
                location: "Chilonzor Toshkent, Uzbekistan",
                filial: "Chilonzor",
                timeline: "Dushanba - Chorshanba - Juma",
                time: "14:00 - 16:00",
                students: groupStudents
            },
            {
                id: 3,
                title: "Mobile",
                level: "Beginner",
                started: false,
                location: "Chilonzor Toshkent, Uzbekistan",
                filial: "Chilonzor",
                timeline: "Dushanba - Chorshanba - Juma",
                time: "15:00 - 17:00",
                students: groupStudents
            }
        ]
    },
    {
        id: 2,
        title: "Fanlar",
        groups: [
            {
                id: 1,
                level: "Ingliz tili",
                started: false,
                location: "Chilonzor Toshkent, Uzbekistan",
                filial: "Chilonzor",
                timeline: "Dushanba - Chorshanba - Juma",
                time: "14:00 - 16:00",
                students: groupStudents
            },

            {
                id: 2,
                level: "Matematika",
                started: false,
                location: "Chilonzor Toshkent, Uzbekistan",
                filial: "Chilonzor",
                timeline: "Dushanba - Chorshanba - Juma",
                time: "14:00 - 16:00",
                students: groupStudents
            },

            {
                id: 3,
                level: "Tarix",
                started: false,
                location: "Chilonzor Toshkent, Uzbekistan",
                filial: "Chilonzor",
                timeline: "Dushanba - Chorshanba - Juma",
                time: "14:00 - 16:00",
                students: groupStudents
            }
        ]
    },
    {
        id: 3,
        title: "Design",
        groups: [
            {
                id: 1,
                level: "Beginner",
                title: "SMM",
                started: false,
                location: "Chilonzor Toshkent, Uzbekistan",
                filial: "Chilonzor",
                timeline: "Dushanba - Chorshanba - Juma",
                time: "14:00 - 16:00",
                students: groupStudents
            },
            {
                id: 2,
                level: "Mobilograph",
                title: "SMM",
                started: false,
                location: "Chilonzor Toshkent, Uzbekistan",
                filial: "Chilonzor",
                timeline: "Dushanba - Chorshanba - Juma",
                time: "14:00 - 16:00",
                students: groupStudents
            },
            {
                id: 3,
                level: "FPC",
                title: "SMM",
                started: false,
                location: "Chilonzor Toshkent, Uzbekistan",
                filial: "Chilonzor",
                timeline: "Dushanba - Chorshanba - Juma",
                time: "14:00 - 16:00",
                students: groupStudents
            },
        ]
    },
]

export default rows;