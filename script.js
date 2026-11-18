document.addEventListener("DOMContentLoaded", () => {
    const facultyData = [
        // Physics Department
        {
            name: "Dr. Krishna Adhikari", qual: "Ph.D. Physics", dept: "Physics", hod: false
        },
        {
            name: "Amrit Ghimire", qual: "M.Sc. Physics", dept: "Physics", hod: true
        },
        {
            name: "Subhash Marasini", qual: "M.Sc. Physics", dept: "Physics", hod: false
        },
        {
            name: "Deepak Banjade", qual: "M.Sc. Physics", dept: "Physics", hod: false
        },
        {
            name: "Suraj Pandey", qual: "M.Sc. Physics", dept: "Physics", hod: false
        },
        {
            name: "Prakash Pokhrel", qual: "M.Sc. Physics", dept: "Physics", hod: false
        },

        // Chemistry Department
        {
            name: "Dr. Amrit Khanal", qual: "Ph.D. Chemistry", dept: "Chemistry", hod: false
        },
        {
            name: "Kabir Oli", qual: "M.Sc. Chemistry", dept: "Chemistry", hod: true
        },
        {
            name: "Divas Nepal", qual: "M.Sc. Chemistry", dept: "Chemistry", hod: false
        },
        {
            name: "Shiksha Bhattarai", qual: "M.Sc. Chemistry", dept: "Chemistry", hod: false
        },
        {
            name: "Shraddha Patravansh", qual: "M.Sc. Chemistry", dept: "Chemistry", hod: false
        },
        {
            name: "Neelkamal Kasaudhan", qual: "M.Sc. Chemistry", dept: "Chemistry", hod: false
        },

        // Biology Department
        {
            name: "Dr. Pratiksha Sharma", qual: "Ph.D. Botany", dept: "Biology", hod: false
        },
        {
            name: "Dhiraj Kshetri", qual: "M.Sc. Botany", dept: "Biology", hod: true
        },
        {
            name: "Dr. Archita Chaudhary", qual: "Ph.D. Zoology", dept: "Biology", hod: false
        },
        {
            name: "Lakshman K.C.", qual: "M.Sc. Zoology", dept: "Biology", hod: false
        },

        // Technology Department
        {
            name: "Dr. Trishna Paudel", qual: "Ph.D. Computer Science", dept: "Technology", hod: false
        },
        {
            name: "Arbind Dubey", qual: "M.C.A.", dept: "Technology", hod: true
        },
        {
            name: "Arjun Khanal", qual: "B.Sc. CSIT", dept: "Technology", hod: false
        },
        {
            name: "Kripa Khanal", qual: "B.I.T.", dept: "Technology", hod: false
        },
        {
            name: "Rishi Khanal", qual: "B.I.M.", dept: "Technology", hod: false
        },
        {
            name: "Narayan Paudel", qual: "B.C.A.", dept: "Technology", hod: false
        },

        // Engineering Department
        {
            name: "Er. Yug Thapa", qual: "M.E. Mechanical Engineering", dept: "Engineering", hod: false
        },
        {
            name: "Er. Resham Thapa", qual: "M.E. Electrical Engineering", dept: "Engineering", hod: true
        },
        {
            name: "Er. Sangam Neupane", qual: "M.E. Electronics Engineering", dept: "Engineering", hod: false
        },
        {
            name: "Er. Md. Saif Ansari", qual: "M.E. Civil Engineering", dept: "Engineering", hod: false
        },
        {
            name: "Er. Sakar Paudel", qual: "M.E. Nuclear Engineering", dept: "Engineering", hod: false
        },
        {
            name: "Er. Samundra Banjade", qual: "M.E. Chemical Engineering", dept: "Engineering", hod: false
        },
        {
            name: "Er. Sujan Pokhrel", qual: "M.E. Biomedical Engineering", dept: "Engineering", hod: false
        },

        // Mathematics Department
        {
            name: "Dr. Siddhartha Vishvakarma (Principal)", qual: "Ph.D. Mathematics", dept: "Mathematics", hod: false
        },
        {
            name: "Vishnu Pandey", qual: "M.Sc. Mathematics", dept: "Mathematics", hod: true
        },
        {
            name: "Vikram Bhandari", qual: "M.Sc. Mathematics", dept: "Mathematics", hod: false
        },
        {
            name: "Santosh Bhattarai", qual: "M.A. Mathematics", dept: "Mathematics", hod: false
        },
        {
            name: "Prashant Kafle", qual: "M.A. Mathematics", dept: "Mathematics", hod: false
        },
        {
            name: "Santosh Tiwari", qual: "M.Ed. Mathematics", dept: "Mathematics", hod: false
        },

        // Nepali Department
        {
            name: "Dr. Samjhana Banjade", qual: "Ph.D. Nepali", dept: "Nepali", hod: false
        },
        {
            name: "Gyaneshwar Acharya", qual: "M.Ed. Nepali", dept: "Nepali", hod: true
        },
        {
            name: "Sadhana Gyawali", qual: "M.A. Nepali", dept: "Nepali", hod: false
        },
        {
            name: "Nirdeshika Adhikari", qual: "M.A. Nepali", dept: "Nepali", hod: false
        },
        {
            name: "Sandesh Basnet", qual: "M.A. Nepali", dept: "Nepali", hod: false
        },
        {
            name: "Manish Panta", qual: "M.A. Nepali", dept: "Nepali", hod: false
        },
        {
            name: "Neelam Tandan", qual: "M.A. Nepali", dept: "Nepali", hod: false
        },

        // English Department
        {
            name: "Dr. Jatin Belbase (Vice Principal)", qual: "Ph.D. English", dept: "English", hod: false
        },
        {
            name: "Maniram Acharya", qual: "M.A. English", dept: "English", hod: true
        },
        {
            name: "Mnaur Ali", qual: "M.A. English", dept: "English", hod: false
        },
        {
            name: "Aarsiya Shreshtha", qual: "M.A. English", dept: "English", hod: false
        },
        {
            name: "Mandira Shreshtha", qual: "M.A. English", dept: "English", hod: false
        },
        {
            name: "Niranjan Shreshtha", qual: "M.A. English", dept: "English", hod: false
        },
        {
            name: "Nikita Rayamajhi", qual: "M.A. English", dept: "English", hod: false
        }];

    const facultyGrid = document.getElementById("facultyGrid");
    const searchInput = document.getElementById("searchInput");
    const tabButtons = document.querySelectorAll(".tab-btn");

    if (!facultyGrid || !searchInput || tabButtons.length === 0) {
        return;
    }

    let activeDept = "Physics";

    function renderFaculty() {
        const rawQuery = searchInput.value.trim();
        const query = rawQuery.toLowerCase();
        facultyGrid.innerHTML = "";

        const filtered = facultyData.filter((member) => {
            const matchesDept = member.dept === activeDept;
            const matchesSearch =
            member.name.toLowerCase().includes(query) ||
            member.qual.toLowerCase().includes(query);
            return matchesDept && matchesSearch;
        });

        if (filtered.length === 0) {
            const emptyMsg = document.createElement("p");
            emptyMsg.className = "empty-msg";
            emptyMsg.textContent = `No faculty members found in the ${activeDept} Department matching "${rawQuery}".`;
            facultyGrid.appendChild(emptyMsg);
            return;
        }

        filtered.forEach((member) => {
            const card = document.createElement("div");
            card.className = "faculty-card";

            const infoWrapper = document.createElement("div");

            const deptEl = document.createElement("div");
            deptEl.className = "faculty-dept";
            deptEl.textContent = `${member.dept} Department`;

            const nameEl = document.createElement("div");
            nameEl.className = "faculty-name";
            nameEl.textContent = member.name;

            const qualEl = document.createElement("div");
            qualEl.className = "faculty-qual";
            qualEl.textContent = member.qual;

            infoWrapper.appendChild(deptEl);
            infoWrapper.appendChild(nameEl);
            infoWrapper.appendChild(qualEl);
            card.appendChild(infoWrapper);

            if (member.hod) {
                const badgeEl = document.createElement("span");
                badgeEl.className = "hod-badge";
                badgeEl.textContent = "Head of Department (HOD)";
                card.appendChild(badgeEl);
            }

            facultyGrid.appendChild(card);
        });
    }

    tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            tabButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            activeDept = btn.getAttribute("data-dept");
            searchInput.value = "";
            searchInput.placeholder = `Search within ${activeDept} Department...`;
            renderFaculty();
        });
    });

    searchInput.addEventListener("input",
        renderFaculty);

    // Set initial placeholder and render default department
    searchInput.placeholder = `Search within ${activeDept} Department...`;
    renderFaculty();
});