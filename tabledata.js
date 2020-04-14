const tableDataNested = [{"state": "Maharashtra", "confirmed": 2455, "recovered": 229, "deaths": 160, "active": 2066, "active_new": 369, "confirmed_new": 391, "recovered_new": 12, "deaths_new": 10}, {"state": "Delhi", "confirmed": 1510, "recovered": 31, "deaths": 28, "active": 1451, "active_new": 349, "confirmed_new": 356, "recovered_new": 3, "deaths_new": 4}, {"state": "Tamil Nadu", "confirmed": 1173, "recovered": 58, "deaths": 11, "active": 1104, "active_new": 90, "confirmed_new": 98, "recovered_new": 8, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 969, "recovered": 121, "deaths": 11, "active": 837, "active_new": 154, "confirmed_new": 154, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 614, "recovered": 51, "deaths": 50, "active": 513, "active_new": 36, "confirmed_new": 52, "recovered_new": 10, "deaths_new": 6}, {"state": "Telangana", "confirmed": 592, "recovered": 103, "deaths": 17, "active": 472, "active_new": 60, "confirmed_new": 61, "recovered_new": 0, "deaths_new": 1}, {"state": "Gujarat", "confirmed": 617, "recovered": 55, "deaths": 26, "active": 536, "active_new": 71, "confirmed_new": 79, "recovered_new": 8, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 657, "recovered": 49, "deaths": 8, "active": 600, "active_new": 167, "confirmed_new": 174, "recovered_new": 4, "deaths_new": 3}, {"state": "Andhra Pradesh", "confirmed": 473, "recovered": 14, "deaths": 9, "active": 450, "active_new": 37, "confirmed_new": 41, "recovered_new": 2, "deaths_new": 2}, {"state": "Kerala", "confirmed": 378, "recovered": 198, "deaths": 2, "active": 178, "active_new": -16, "confirmed_new": 3, "recovered_new": 19, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 270, "recovered": 29, "deaths": 4, "active": 237, "active_new": 2, "confirmed_new": 25, "recovered_new": 23, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 258, "recovered": 65, "deaths": 9, "active": 184, "active_new": 2, "confirmed_new": 11, "recovered_new": 6, "deaths_new": 3}, {"state": "Haryana", "confirmed": 198, "recovered": 53, "deaths": 3, "active": 142, "active_new": -6, "confirmed_new": 3, "recovered_new": 9, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 190, "recovered": 36, "deaths": 7, "active": 147, "active_new": 31, "confirmed_new": 38, "recovered_new": 7, "deaths_new": 0}, {"state": "Punjab", "confirmed": 176, "recovered": 25, "deaths": 12, "active": 139, "active_new": 4, "confirmed_new": 6, "recovered_new": 2, "deaths_new": 0}, {"state": "Bihar", "confirmed": 66, "recovered": 29, "deaths": 1, "active": 36, "active_new": -2, "confirmed_new": 1, "recovered_new": 3, "deaths_new": 0}, {"state": "Odisha", "confirmed": 56, "recovered": 18, "deaths": 1, "active": 37, "active_new": -3, "confirmed_new": 2, "recovered_new": 5, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 35, "recovered": 7, "deaths": 0, "active": 28, "active_new": -2, "confirmed_new": 0, "recovered_new": 2, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 32, "recovered": 12, "deaths": 2, "active": 18, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 31, "recovered": 10, "deaths": 0, "active": 21, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 31, "recovered": 0, "deaths": 1, "active": 30, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 24, "recovered": 0, "deaths": 2, "active": 22, "active_new": 5, "confirmed_new": 5, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 21, "recovered": 7, "deaths": 0, "active": 14, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 17, "recovered": 12, "deaths": 0, "active": 5, "active_new": 1, "confirmed_new": 2, "recovered_new": 1, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 11, "recovered": 10, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 5, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 7, "recovered": 1, "deaths": 0, "active": 6, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 0, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];