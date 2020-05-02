const tableDataNested = [{"state": "Maharashtra", "confirmed": 12296, "recovered": 2000, "deaths": 521, "active": 9775, "active_new": 633, "confirmed_new": 790, "recovered_new": 121, "deaths_new": 36}, {"state": "Gujarat", "confirmed": 5054, "recovered": 896, "deaths": 262, "active": 3896, "active_new": 147, "confirmed_new": 333, "recovered_new": 160, "deaths_new": 26}, {"state": "Delhi", "confirmed": 4122, "recovered": 1256, "deaths": 64, "active": 2802, "active_new": 292, "confirmed_new": 384, "recovered_new": 89, "deaths_new": 3}, {"state": "Madhya Pradesh", "confirmed": 2788, "recovered": 622, "deaths": 151, "active": 2015, "active_new": -31, "confirmed_new": 73, "recovered_new": 98, "deaths_new": 6}, {"state": "Rajasthan", "confirmed": 2772, "recovered": 1242, "deaths": 68, "active": 1462, "active_new": -26, "confirmed_new": 106, "recovered_new": 126, "deaths_new": 6}, {"state": "Tamil Nadu", "confirmed": 2757, "recovered": 1341, "deaths": 29, "active": 1387, "active_new": 201, "confirmed_new": 231, "recovered_new": 29, "deaths_new": 1}, {"state": "Uttar Pradesh", "confirmed": 2487, "recovered": 698, "deaths": 43, "active": 1746, "active_new": 114, "confirmed_new": 159, "recovered_new": 44, "deaths_new": 1}, {"state": "Andhra Pradesh", "confirmed": 1525, "recovered": 441, "deaths": 33, "active": 1051, "active_new": 24, "confirmed_new": 62, "recovered_new": 38, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1061, "recovered": 499, "deaths": 29, "active": 533, "active_new": -19, "confirmed_new": 17, "recovered_new": 35, "deaths_new": 1}, {"state": "West Bengal", "confirmed": 795, "recovered": 139, "deaths": 48, "active": 608, "active_new": -15, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 15}, {"state": "Jammu and Kashmir", "confirmed": 666, "recovered": 254, "deaths": 8, "active": 404, "active_new": 20, "confirmed_new": 27, "recovered_new": 7, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 601, "recovered": 271, "deaths": 25, "active": 304, "active_new": -11, "confirmed_new": 12, "recovered_new": 20, "deaths_new": 3}, {"state": "Kerala", "confirmed": 500, "recovered": 400, "deaths": 4, "active": 96, "active_new": -6, "confirmed_new": 2, "recovered_new": 8, "deaths_new": 0}, {"state": "Bihar", "confirmed": 481, "recovered": 98, "deaths": 4, "active": 379, "active_new": 0, "confirmed_new": 15, "recovered_new": 14, "deaths_new": 1}, {"state": "Punjab", "confirmed": 772, "recovered": 112, "deaths": 20, "active": 640, "active_new": 183, "confirmed_new": 187, "recovered_new": 4, "deaths_new": 0}, {"state": "Haryana", "confirmed": 376, "recovered": 242, "deaths": 4, "active": 130, "active_new": 18, "confirmed_new": 19, "recovered_new": 1, "deaths_new": 0}, {"state": "Odisha", "confirmed": 157, "recovered": 56, "deaths": 1, "active": 100, "active_new": 7, "confirmed_new": 8, "recovered_new": 1, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 115, "recovered": 21, "deaths": 3, "active": 91, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 94, "recovered": 19, "deaths": 0, "active": 75, "active_new": 5, "confirmed_new": 6, "recovered_new": 1, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 59, "recovered": 39, "deaths": 1, "active": 19, "active_new": 0, "confirmed_new": 2, "recovered_new": 2, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 40, "recovered": 33, "deaths": 2, "active": 2, "active_new": -3, "confirmed_new": 0, "recovered_new": 3, "deaths_new": 0}, {"state": "Assam", "confirmed": 43, "recovered": 33, "deaths": 1, "active": 9, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 43, "recovered": 36, "deaths": 0, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 26, "deaths": 0, "active": 7, "active_new": -10, "confirmed_new": 0, "recovered_new": 10, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 23, "recovered": 17, "deaths": 0, "active": 6, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 12, "recovered": 10, "deaths": 1, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 12, "recovered": 5, "deaths": 0, "active": 7, "active_new": 4, "confirmed_new": 4, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 7, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 4, "recovered": 2, "deaths": 0, "active": 2, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];