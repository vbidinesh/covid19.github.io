const tableDataNested = [{"state": "Maharashtra", "confirmed": 11506, "recovered": 1879, "deaths": 485, "active": 9142, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 4721, "recovered": 735, "deaths": 236, "active": 3750, "active_new": 1, "confirmed_new": 0, "recovered_new": -1, "deaths_new": 0}, {"state": "Delhi", "confirmed": 3738, "recovered": 1167, "deaths": 61, "active": 2510, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 2715, "recovered": 524, "deaths": 145, "active": 2046, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 2720, "recovered": 1121, "deaths": 65, "active": 1534, "active_new": 46, "confirmed_new": 54, "recovered_new": 5, "deaths_new": 3}, {"state": "Tamil Nadu", "confirmed": 2526, "recovered": 1312, "deaths": 28, "active": 1186, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 2328, "recovered": 654, "deaths": 42, "active": 1632, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 1525, "recovered": 441, "deaths": 33, "active": 1051, "active_new": 24, "confirmed_new": 62, "recovered_new": 38, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1044, "recovered": 464, "deaths": 28, "active": 552, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 795, "recovered": 139, "deaths": 33, "active": 623, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 666, "recovered": 254, "deaths": 8, "active": 404, "active_new": 20, "confirmed_new": 27, "recovered_new": 7, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 601, "recovered": 271, "deaths": 25, "active": 304, "active_new": -11, "confirmed_new": 12, "recovered_new": 20, "deaths_new": 3}, {"state": "Kerala", "confirmed": 500, "recovered": 400, "deaths": 4, "active": 96, "active_new": -6, "confirmed_new": 2, "recovered_new": 8, "deaths_new": 0}, {"state": "Bihar", "confirmed": 481, "recovered": 98, "deaths": 4, "active": 379, "active_new": -3, "confirmed_new": 12, "recovered_new": 14, "deaths_new": 1}, {"state": "Punjab", "confirmed": 772, "recovered": 112, "deaths": 20, "active": 640, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 376, "recovered": 242, "deaths": 4, "active": 130, "active_new": 12, "confirmed_new": 12, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 157, "recovered": 56, "deaths": 1, "active": 100, "active_new": 7, "confirmed_new": 8, "recovered_new": 1, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 113, "recovered": 21, "deaths": 3, "active": 89, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 94, "recovered": 19, "deaths": 0, "active": 75, "active_new": 5, "confirmed_new": 6, "recovered_new": 1, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 59, "recovered": 37, "deaths": 1, "active": 21, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 40, "recovered": 30, "deaths": 2, "active": 5, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 43, "recovered": 33, "deaths": 1, "active": 9, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 43, "recovered": 36, "deaths": 0, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 17, "deaths": 0, "active": 16, "active_new": -1, "confirmed_new": 0, "recovered_new": 1, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 23, "recovered": 17, "deaths": 0, "active": 6, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 12, "recovered": 10, "deaths": 1, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 8, "recovered": 5, "deaths": 0, "active": 3, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 7, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 4, "recovered": 2, "deaths": 0, "active": 2, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];