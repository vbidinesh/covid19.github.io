const tableDataNested = [{"state": "Maharashtra", "confirmed": 10498, "recovered": 1773, "deaths": 459, "active": 8266, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 4395, "recovered": 613, "deaths": 214, "active": 3568, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 3515, "recovered": 1094, "deaths": 59, "active": 2362, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 2625, "recovered": 482, "deaths": 137, "active": 2006, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 2642, "recovered": 983, "deaths": 61, "active": 1598, "active_new": 50, "confirmed_new": 60, "recovered_new": 7, "deaths_new": 3}, {"state": "Tamil Nadu", "confirmed": 2323, "recovered": 1258, "deaths": 27, "active": 1038, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 2211, "recovered": 551, "deaths": 40, "active": 1620, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 1463, "recovered": 403, "deaths": 33, "active": 1027, "active_new": -24, "confirmed_new": 60, "recovered_new": 82, "deaths_new": 2}, {"state": "Telangana", "confirmed": 1038, "recovered": 442, "deaths": 28, "active": 568, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 795, "recovered": 139, "deaths": 33, "active": 623, "active_new": 22, "confirmed_new": 37, "recovered_new": 15, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 614, "recovered": 216, "deaths": 8, "active": 390, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 576, "recovered": 235, "deaths": 22, "active": 318, "active_new": 4, "confirmed_new": 11, "recovered_new": 6, "deaths_new": 0}, {"state": "Kerala", "confirmed": 498, "recovered": 383, "deaths": 4, "active": 111, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 432, "recovered": 84, "deaths": 2, "active": 346, "active_new": 7, "confirmed_new": 7, "recovered_new": 0, "deaths_new": 0}, {"state": "Punjab", "confirmed": 480, "recovered": 104, "deaths": 20, "active": 356, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 347, "recovered": 235, "deaths": 4, "active": 108, "active_new": 8, "confirmed_new": 8, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 148, "recovered": 41, "deaths": 1, "active": 106, "active_new": 6, "confirmed_new": 6, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 110, "recovered": 19, "deaths": 3, "active": 88, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 74, "recovered": 18, "deaths": 0, "active": 56, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 57, "recovered": 36, "deaths": 0, "active": 21, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 40, "recovered": 28, "deaths": 2, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 43, "recovered": 29, "deaths": 1, "active": 13, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 40, "recovered": 36, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 16, "deaths": 0, "active": 17, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 22, "recovered": 17, "deaths": 0, "active": 5, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 12, "recovered": 8, "deaths": 1, "active": 3, "active_new": -8, "confirmed_new": 0, "recovered_new": 8, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 8, "recovered": 5, "deaths": 0, "active": 3, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 7, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];