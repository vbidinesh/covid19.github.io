const tableDataNested = [{"state": "Maharashtra", "confirmed": 29100, "recovered": 6564, "deaths": 1068, "active": 21468, "active_new": 1022, "confirmed_new": 1576, "recovered_new": 505, "deaths_new": 49}, {"state": "Tamil Nadu", "confirmed": 10108, "recovered": 2599, "deaths": 71, "active": 7438, "active_new": 70, "confirmed_new": 434, "recovered_new": 359, "deaths_new": 5}, {"state": "Gujarat", "confirmed": 9932, "recovered": 4035, "deaths": 606, "active": 5291, "active_new": 38, "confirmed_new": 340, "recovered_new": 282, "deaths_new": 20}, {"state": "Delhi", "confirmed": 8895, "recovered": 3518, "deaths": 123, "active": 5254, "active_new": -56, "confirmed_new": 425, "recovered_new": 473, "deaths_new": 8}, {"state": "Madhya Pradesh", "confirmed": 4595, "recovered": 2283, "deaths": 239, "active": 2073, "active_new": 55, "confirmed_new": 169, "recovered_new": 112, "deaths_new": 2}, {"state": "Rajasthan", "confirmed": 4747, "recovered": 2729, "deaths": 125, "active": 1893, "active_new": 174, "confirmed_new": 213, "recovered_new": 39, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 3902, "recovered": 2072, "deaths": 88, "active": 1742, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 2461, "recovered": 829, "deaths": 225, "active": 1407, "active_new": 13, "confirmed_new": 84, "recovered_new": 61, "deaths_new": 10}, {"state": "Andhra Pradesh", "confirmed": 2307, "recovered": 1252, "deaths": 48, "active": 1007, "active_new": 42, "confirmed_new": 102, "recovered_new": 60, "deaths_new": 0}, {"state": "Punjab", "confirmed": 1932, "recovered": 305, "deaths": 32, "active": 1595, "active_new": -85, "confirmed_new": -3, "recovered_new": 82, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1454, "recovered": 959, "deaths": 34, "active": 461, "active_new": 33, "confirmed_new": 40, "recovered_new": 7, "deaths_new": 0}, {"state": "Bihar", "confirmed": 1018, "recovered": 452, "deaths": 7, "active": 559, "active_new": -33, "confirmed_new": 19, "recovered_new": 52, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 1056, "recovered": 480, "deaths": 36, "active": 539, "active_new": 48, "confirmed_new": 69, "recovered_new": 20, "deaths_new": 1}, {"state": "Jammu and Kashmir", "confirmed": 1013, "recovered": 513, "deaths": 11, "active": 489, "active_new": 2, "confirmed_new": 30, "recovered_new": 28, "deaths_new": 0}, {"state": "Haryana", "confirmed": 854, "recovered": 464, "deaths": 13, "active": 377, "active_new": 9, "confirmed_new": 36, "recovered_new": 25, "deaths_new": 2}, {"state": "Odisha", "confirmed": 672, "recovered": 166, "deaths": 3, "active": 503, "active_new": 40, "confirmed_new": 48, "recovered_new": 8, "deaths_new": 0}, {"state": "Kerala", "confirmed": 577, "recovered": 493, "deaths": 4, "active": 80, "active_new": 16, "confirmed_new": 16, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 191, "recovered": 40, "deaths": 3, "active": 148, "active_new": -3, "confirmed_new": 0, "recovered_new": 3, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 205, "recovered": 87, "deaths": 3, "active": 115, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 156, "recovered": 29, "deaths": 0, "active": 127, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 87, "recovered": 41, "deaths": 2, "active": 43, "active_new": -1, "confirmed_new": 0, "recovered_new": 1, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 82, "recovered": 51, "deaths": 1, "active": 30, "active_new": 3, "confirmed_new": 4, "recovered_new": 1, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 75, "recovered": 35, "deaths": 3, "active": 34, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 60, "recovered": 56, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 43, "recovered": 24, "deaths": 0, "active": 19, "active_new": -2, "confirmed_new": 0, "recovered_new": 2, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 15, "recovered": 7, "deaths": 0, "active": 8, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 13, "recovered": 11, "deaths": 1, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 16, "recovered": 9, "deaths": 0, "active": 7, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 3, "recovered": 2, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];