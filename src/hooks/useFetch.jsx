import * as mockData from "../mock/index.js";

const useFetch = () => {
    const useMockData = import.meta.env.VITE_USE_MOCK_DATA === "true";
    const baseURL = import.meta.env.VITE_BASE_URL;

    const getMockData = (url = "", options = {}) => {
        const method = options.method || "GET";
        const body = options.body;

        // Parse the URL to determine what data to return
        if (url.includes("/tabs/students")) {
            if (method === "GET") {
                if (url.includes("/status/TRUE")) {
                    return mockData.allStudents.filter(s => s.status === "TRUE");
                } else if (url.includes("/status/FALSE")) {
                    return mockData.allStudents.filter(s => s.status === "FALSE");
                }
                return mockData.allStudents;
            } else if (method === "PUT") {
                // Handle update
                return { success: true, message: "Updated successfully" };
            } else if (method === "POST") {
                // Handle create
                return { success: true, message: "Created successfully" };
            } else if (method === "DELETE") {
                // Handle delete
                return { success: true, message: "Deleted successfully" };
            }
        }

        if (url.includes("/tabs/lids")) {
            if (method === "GET") {
                return mockData.lids;
            } else if (method === "PUT") {
                return { success: true, message: "Updated successfully" };
            } else if (method === "POST") {
                return { success: true, message: "Created successfully" };
            } else if (method === "DELETE") {
                return { success: true, message: "Deleted successfully" };
            }
        }

        if (url.includes("/tabs/groups")) {
            if (method === "GET") {
                return mockData.groupsData;
            } else if (method === "PUT") {
                return { success: true, message: "Updated successfully" };
            } else if (method === "POST") {
                return { success: true, message: "Created successfully" };
            } else if (method === "DELETE") {
                return { success: true, message: "Deleted successfully" };
            }
        }

        if (url.includes("/tabs/rooms")) {
            if (method === "GET") {
                return mockData.roomsData;
            } else if (method === "PUT") {
                return { success: true, message: "Updated successfully" };
            } else if (method === "POST") {
                return { success: true, message: "Created successfully" };
            } else if (method === "DELETE") {
                return { success: true, message: "Deleted successfully" };
            }
        }

        if (url.includes("/tabs/category")) {
            if (method === "GET") {
                return mockData.categories;
            } else if (method === "PUT") {
                return { success: true, message: "Updated successfully" };
            } else if (method === "POST") {
                return { success: true, message: "Created successfully" };
            } else if (method === "DELETE") {
                return { success: true, message: "Deleted successfully" };
            }
        }

        if (url.includes("/tabs/analytics_page")) {
            if (method === "GET") {
                // Return wrapped analytics data as API does
                return [mockData.analyticsData];
            }
        }

        if (url.includes("/tabs/media")) {
            if (method === "GET") {
                // Return media data
                return [
                    { id: 1, title: "Instagram", subscribers: 24500 },
                    { id: 2, title: "Telegram", subscribers: 18700 },
                    { id: 3, title: "YouTube", subscribers: 12300 },
                    { id: 4, title: "LinkedIn", subscribers: 5600 },
                    { id: 5, title: "Facebook", subscribers: 8200 },
                ];
            }
        }

        if (url.includes("/tabs/emails")) {
            if (method === "GET") {
                // Return email data
                return [
                    { id: 1, surname: "Qosimov", name: "Bekmirza", title: "Yangi o'quvchi", sms: "Assalomu alaykum...", date: "10:30", src: "" },
                    { id: 2, surname: "Aliyev", name: "Sardor", title: "Guruhga kiritildi", sms: "Siz guruhga kiritildingiz...", date: "09:15", src: "" },
                    { id: 3, surname: "Rahmonov", name: "Akbar", title: "To'lov qabul qilindi", sms: "To'lovingiz qabul qilindi...", date: "14:45", src: "" },
                ];
            }
        }

        if (url.includes("/tabs/moliya")) {
            if (method === "GET") {
                // Return financial data
                const today = new Date().getDate();
                return [
                    { id: 1, day: new Date().toISOString(), today: `${today}`, amount: 5000000, type: "kirim", description: "Darslar to'lovi" },
                    { id: 2, day: new Date(Date.now() - 86400000).toISOString(), today: `${today - 1}`, amount: 3500000, type: "chiqim", description: "Xodimlar ish haqi" },
                    { id: 3, day: new Date(Date.now() - 172800000).toISOString(), today: `${today - 2}`, amount: 2500000, type: "kirim", description: "Yangi kurslar" },
                ];
            }
        }

        // Handle dynamic group check-in data (by group name)
        const dynamicGroupMatch = url.match(/\/tabs\/([A-Za-z0-9\s]+)$/);
        if (dynamicGroupMatch && url.includes("/tabs/")) {
            const groupName = dynamicGroupMatch[1];
            // Return attendance data with dynamic date columns
            const today = new Date();
            const attendanceData = {};
            
            // Generate attendance columns for the last 4 days
            for (let i = 0; i < 4; i++) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);
                const dateStr = date.toLocaleDateString("en-GB").replace(/\//g, "-");
                attendanceData[dateStr] = "keldi";
            }

            return [
                {
                    id: 1,
                    name: "Mutalxodjayev Avazbek",
                    phone: "+998 99 999 99 99",
                    ...attendanceData,
                },
                {
                    id: 2,
                    name: "Yusupov Bexruz",
                    phone: "+998 98 888 88 88",
                    ...attendanceData,
                },
                {
                    id: 3,
                    name: "Xusanboyev Asliddin",
                    phone: "+998 97 777 77 77",
                    ...attendanceData,
                },
            ];
        }

        // For other endpoints, try to extract tab name from URL
        const tabMatch = url.match(/\/tabs\/([a-zA-Z0-9_]+)/);
        if (tabMatch) {
            const tabName = tabMatch[1];
            if (mockData[tabName]) {
                return mockData[tabName];
            }
        }

        return [];
    };

    return async (url = "", options = {}) => {
        // Use mock data if enabled
        if (useMockData) {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 300));
            return getMockData(url, options);
        }

        // Otherwise use real API
        let res = await fetch(baseURL + url, {
            method: options.method || "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            body: options.body ? JSON.stringify(options.body) : undefined,
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        return await res.json();
    };
};

export default useFetch;
