const tableDataNested = [{"state": "Maharashtra", "confirmed": 2455, "recovered": 229, "deaths": 160, "active": 2066, "active_new": 369, "confirmed_new": 391, "recovered_new": 12, "deaths_new": 10}, {"state": "Delhi", "confirmed": 1510, "recovered": 31, "deaths": 28, "active": 1451, "active_new": 349, "confirmed_new": 356, "recovered_new": 3, "deaths_new": 4}, {"state": "Tamil Nadu", "confirmed": 1204, "recovered": 81, "deaths": 12, "active": 1111, "active_new": 97, "confirmed_new": 129, "recovered_new": 31, "deaths_new": 1}, {"state": "Rajasthan", "confirmed": 969, "recovered": 133, "deaths": 11, "active": 825, "active_new": 142, "confirmed_new": 154, "recovered_new": 12, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 614, "recovered": 51, "deaths": 50, "active": 513, "active_new": 36, "confirmed_new": 52, "recovered_new": 10, "deaths_new": 6}, {"state": "Telangana", "confirmed": 592, "recovered": 103, "deaths": 17, "active": 472, "active_new": 60, "confirmed_new": 61, "recovered_new": 0, "deaths_new": 1}, {"state": "Gujarat", "confirmed": 650, "recovered": 59, "deaths": 28, "active": 563, "active_new": 98, "confirmed_new": 112, "recovered_new": 12, "deaths_new": 2}, {"state": "Uttar Pradesh", "confirmed": 660, "recovered": 50, "deaths": 8, "active": 602, "active_new": 169, "confirmed_new": 177, "recovered_new": 5, "deaths_new": 3}, {"state": "Andhra Pradesh", "confirmed": 473, "recovered": 16, "deaths": 9, "active": 448, "active_new": 35, "confirmed_new": 41, "recovered_new": 4, "deaths_new": 2}, {"state": "Kerala", "confirmed": 386, "recovered": 211, "deaths": 2, "active": 173, "active_new": -21, "confirmed_new": 11, "recovered_new": 32, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 278, "recovered": 30, "deaths": 4, "active": 244, "active_new": 9, "confirmed_new": 33, "recovered_new": 24, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 260, "recovered": 71, "deaths": 10, "active": 179, "active_new": -3, "confirmed_new": 13, "recovered_new": 12, "deaths_new": 4}, {"state": "Haryana", "confirmed": 198, "recovered": 55, "deaths": 3, "active": 140, "active_new": -8, "confirmed_new": 3, "recovered_new": 11, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 190, "recovered": 36, "deaths": 7, "active": 147, "active_new": 31, "confirmed_new": 38, "recovered_new": 7, "deaths_new": 0}, {"state": "Punjab", "confirmed": 184, "recovered": 25, "deaths": 12, "active": 147, "active_new": 12, "confirmed_new": 14, "recovered_new": 2, "deaths_new": 0}, {"state": "Bihar", "confirmed": 66, "recovered": 29, "deaths": 1, "active": 36, "active_new": -2, "confirmed_new": 1, "recovered_new": 3, "deaths_new": 0}, {"state": "Odisha", "confirmed": 60, "recovered": 18, "deaths": 1, "active": 41, "active_new": 1, "confirmed_new": 6, "recovered_new": 5, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 37, "recovered": 9, "deaths": 0, "active": 28, "active_new": -2, "confirmed_new": 2, "recovered_new": 4, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 32, "recovered": 12, "deaths": 2, "active": 18, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 33, "recovered": 10, "deaths": 0, "active": 23, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 31, "recovered": 0, "deaths": 1, "active": 30, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 27, "recovered": 0, "deaths": 2, "active": 25, "active_new": 8, "confirmed_new": 8, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 21, "recovered": 7, "deaths": 0, "active": 14, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 17, "recovered": 12, "deaths": 0, "active": 5, "active_new": 1, "confirmed_new": 2, "recovered_new": 1, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 11, "recovered": 10, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 5, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 7, "recovered": 1, "deaths": 0, "active": 6, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 0, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];