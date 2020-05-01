const tableDataNested = [{"state": "Maharashtra", "confirmed": 10498, "recovered": 1773, "deaths": 459, "active": 8266, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 4721, "recovered": 736, "deaths": 236, "active": 3749, "active_new": 181, "confirmed_new": 326, "recovered_new": 123, "deaths_new": 22}, {"state": "Delhi", "confirmed": 3515, "recovered": 1094, "deaths": 59, "active": 2362, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 2625, "recovered": 482, "deaths": 137, "active": 2006, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 2642, "recovered": 983, "deaths": 61, "active": 1598, "active_new": -33, "confirmed_new": 60, "recovered_new": 90, "deaths_new": 3}, {"state": "Tamil Nadu", "confirmed": 2526, "recovered": 1312, "deaths": 28, "active": 1186, "active_new": 148, "confirmed_new": 203, "recovered_new": 54, "deaths_new": 1}, {"state": "Uttar Pradesh", "confirmed": 2328, "recovered": 654, "deaths": 42, "active": 1632, "active_new": 12, "confirmed_new": 117, "recovered_new": 103, "deaths_new": 2}, {"state": "Andhra Pradesh", "confirmed": 1463, "recovered": 403, "deaths": 33, "active": 1027, "active_new": -24, "confirmed_new": 60, "recovered_new": 82, "deaths_new": 2}, {"state": "Telangana", "confirmed": 1044, "recovered": 464, "deaths": 28, "active": 552, "active_new": -16, "confirmed_new": 6, "recovered_new": 22, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 795, "recovered": 139, "deaths": 33, "active": 623, "active_new": 22, "confirmed_new": 37, "recovered_new": 15, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 639, "recovered": 247, "deaths": 8, "active": 384, "active_new": -6, "confirmed_new": 25, "recovered_new": 31, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 589, "recovered": 251, "deaths": 22, "active": 315, "active_new": 1, "confirmed_new": 24, "recovered_new": 22, "deaths_new": 0}, {"state": "Kerala", "confirmed": 498, "recovered": 392, "deaths": 4, "active": 102, "active_new": -9, "confirmed_new": 0, "recovered_new": 9, "deaths_new": 0}, {"state": "Bihar", "confirmed": 466, "recovered": 84, "deaths": 3, "active": 379, "active_new": 40, "confirmed_new": 41, "recovered_new": 0, "deaths_new": 1}, {"state": "Punjab", "confirmed": 585, "recovered": 108, "deaths": 20, "active": 457, "active_new": 101, "confirmed_new": 105, "recovered_new": 4, "deaths_new": 0}, {"state": "Haryana", "confirmed": 357, "recovered": 241, "deaths": 4, "active": 112, "active_new": 12, "confirmed_new": 18, "recovered_new": 6, "deaths_new": 0}, {"state": "Odisha", "confirmed": 149, "recovered": 55, "deaths": 1, "active": 93, "active_new": -7, "confirmed_new": 7, "recovered_new": 14, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 110, "recovered": 19, "deaths": 3, "active": 88, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 88, "recovered": 18, "deaths": 0, "active": 70, "active_new": 14, "confirmed_new": 14, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 57, "recovered": 36, "deaths": 0, "active": 21, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 40, "recovered": 28, "deaths": 2, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 43, "recovered": 33, "deaths": 1, "active": 9, "active_new": -4, "confirmed_new": 0, "recovered_new": 4, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 43, "recovered": 36, "deaths": 0, "active": 7, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 16, "deaths": 0, "active": 17, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 22, "recovered": 17, "deaths": 0, "active": 5, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 12, "recovered": 10, "deaths": 1, "active": 1, "active_new": -10, "confirmed_new": 0, "recovered_new": 10, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 8, "recovered": 5, "deaths": 0, "active": 3, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 7, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];