const tableDataNested = [{"state": "Maharashtra", "confirmed": 33053, "recovered": 7688, "deaths": 1198, "active": 24167, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 11380, "recovered": 4499, "deaths": 659, "active": 6222, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 11224, "recovered": 4172, "deaths": 79, "active": 6973, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 10054, "recovered": 4485, "deaths": 160, "active": 5409, "active_new": 4, "confirmed_new": 299, "recovered_new": 283, "deaths_new": 12}, {"state": "Rajasthan", "confirmed": 5375, "recovered": 3068, "deaths": 133, "active": 2174, "active_new": 158, "confirmed_new": 173, "recovered_new": 13, "deaths_new": 2}, {"state": "Madhya Pradesh", "confirmed": 4977, "recovered": 2403, "deaths": 248, "active": 2326, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 4464, "recovered": 2636, "deaths": 112, "active": 1716, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 2677, "recovered": 959, "deaths": 238, "active": 1480, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 2432, "recovered": 1552, "deaths": 50, "active": 830, "active_new": -44, "confirmed_new": 52, "recovered_new": 96, "deaths_new": 0}, {"state": "Punjab", "confirmed": 1964, "recovered": 1366, "deaths": 35, "active": 563, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1551, "recovered": 992, "deaths": 34, "active": 525, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 1392, "recovered": 473, "deaths": 9, "active": 910, "active_new": 71, "confirmed_new": 72, "recovered_new": 0, "deaths_new": 1}, {"state": "Jammu and Kashmir", "confirmed": 1183, "recovered": 575, "deaths": 13, "active": 595, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 1231, "recovered": 521, "deaths": 37, "active": 672, "active_new": 72, "confirmed_new": 84, "recovered_new": 12, "deaths_new": 0}, {"state": "Haryana", "confirmed": 912, "recovered": 563, "deaths": 14, "active": 335, "active_new": 1, "confirmed_new": 2, "recovered_new": 1, "deaths_new": 0}, {"state": "Odisha", "confirmed": 876, "recovered": 277, "deaths": 4, "active": 595, "active_new": -9, "confirmed_new": 48, "recovered_new": 57, "deaths_new": 0}, {"state": "Kerala", "confirmed": 602, "recovered": 497, "deaths": 4, "active": 101, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 223, "recovered": 113, "deaths": 3, "active": 107, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 191, "recovered": 51, "deaths": 3, "active": 137, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 165, "recovered": 85, "deaths": 0, "active": 80, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 105, "recovered": 42, "deaths": 3, "active": 58, "active_new": 3, "confirmed_new": 4, "recovered_new": 0, "deaths_new": 1}, {"state": "Uttarakhand", "confirmed": 93, "recovered": 52, "deaths": 1, "active": 40, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 80, "recovered": 40, "deaths": 3, "active": 34, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 85, "recovered": 59, "deaths": 0, "active": 26, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 43, "recovered": 24, "deaths": 0, "active": 19, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 31, "recovered": 7, "deaths": 0, "active": 24, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 17, "recovered": 9, "deaths": 0, "active": 8, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 13, "recovered": 12, "deaths": 1, "active": 0, "active_new": -1, "confirmed_new": 0, "recovered_new": 1, "deaths_new": 0}, {"state": "Manipur", "confirmed": 7, "recovered": 2, "deaths": 0, "active": 5, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];