const tableDataNested = [{"state": "Maharashtra", "confirmed": 8590, "recovered": 1282, "deaths": 369, "active": 6939, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 3774, "recovered": 434, "deaths": 181, "active": 3159, "active_new": 167, "confirmed_new": 226, "recovered_new": 40, "deaths_new": 19}, {"state": "Delhi", "confirmed": 3108, "recovered": 877, "deaths": 54, "active": 2177, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 2387, "recovered": 373, "deaths": 120, "active": 1894, "active_new": 196, "confirmed_new": 222, "recovered_new": 16, "deaths_new": 10}, {"state": "Rajasthan", "confirmed": 2364, "recovered": 744, "deaths": 52, "active": 1568, "active_new": 100, "confirmed_new": 102, "recovered_new": 0, "deaths_new": 2}, {"state": "Tamil Nadu", "confirmed": 2058, "recovered": 1128, "deaths": 25, "active": 905, "active_new": 93, "confirmed_new": 121, "recovered_new": 27, "deaths_new": 1}, {"state": "Uttar Pradesh", "confirmed": 2053, "recovered": 462, "deaths": 34, "active": 1557, "active_new": 1, "confirmed_new": 67, "recovered_new": 63, "deaths_new": 3}, {"state": "Andhra Pradesh", "confirmed": 1259, "recovered": 258, "deaths": 31, "active": 970, "active_new": 59, "confirmed_new": 82, "recovered_new": 23, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1009, "recovered": 374, "deaths": 25, "active": 610, "active_new": -36, "confirmed_new": 6, "recovered_new": 42, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 697, "recovered": 109, "deaths": 22, "active": 566, "active_new": 42, "confirmed_new": 48, "recovered_new": 4, "deaths_new": 2}, {"state": "Jammu and Kashmir", "confirmed": 565, "recovered": 176, "deaths": 8, "active": 381, "active_new": 6, "confirmed_new": 19, "recovered_new": 12, "deaths_new": 1}, {"state": "Karnataka", "confirmed": 523, "recovered": 207, "deaths": 20, "active": 296, "active_new": -3, "confirmed_new": 11, "recovered_new": 14, "deaths_new": 0}, {"state": "Kerala", "confirmed": 486, "recovered": 359, "deaths": 4, "active": 123, "active_new": 0, "confirmed_new": 4, "recovered_new": 4, "deaths_new": 0}, {"state": "Bihar", "confirmed": 366, "recovered": 64, "deaths": 2, "active": 300, "active_new": 12, "confirmed_new": 20, "recovered_new": 8, "deaths_new": 0}, {"state": "Punjab", "confirmed": 342, "recovered": 101, "deaths": 19, "active": 222, "active_new": 9, "confirmed_new": 12, "recovered_new": 3, "deaths_new": 0}, {"state": "Haryana", "confirmed": 308, "recovered": 224, "deaths": 3, "active": 81, "active_new": -4, "confirmed_new": 7, "recovered_new": 11, "deaths_new": 0}, {"state": "Odisha", "confirmed": 118, "recovered": 38, "deaths": 1, "active": 79, "active_new": 6, "confirmed_new": 7, "recovered_new": 1, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 104, "recovered": 17, "deaths": 3, "active": 84, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 56, "recovered": 17, "deaths": 0, "active": 39, "active_new": 11, "confirmed_new": 11, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 54, "recovered": 34, "deaths": 0, "active": 20, "active_new": 2, "confirmed_new": 3, "recovered_new": 1, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 40, "recovered": 25, "deaths": 2, "active": 13, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 38, "recovered": 27, "deaths": 1, "active": 10, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 37, "recovered": 34, "deaths": 0, "active": 3, "active_new": -2, "confirmed_new": 0, "recovered_new": 2, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 15, "deaths": 0, "active": 18, "active_new": -4, "confirmed_new": 0, "recovered_new": 4, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 22, "recovered": 16, "deaths": 0, "active": 6, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 12, "recovered": 0, "deaths": 1, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 8, "recovered": 5, "deaths": 0, "active": 3, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 7, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];