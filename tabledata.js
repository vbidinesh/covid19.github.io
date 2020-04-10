const tableDataNested = [{"state": "Maharashtra", "confirmed": 1364, "recovered": 125, "deaths": 108, "active": 1131, "active_new": -10, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 10}, {"state": "Tamil Nadu", "confirmed": 911, "recovered": 44, "deaths": 9, "active": 858, "active_new": 59, "confirmed_new": 77, "recovered_new": 17, "deaths_new": 1}, {"state": "Delhi", "confirmed": 903, "recovered": 25, "deaths": 13, "active": 865, "active_new": 182, "confirmed_new": 183, "recovered_new": 0, "deaths_new": 1}, {"state": "Telangana", "confirmed": 487, "recovered": 45, "deaths": 12, "active": 430, "active_new": 16, "confirmed_new": 16, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 520, "recovered": 60, "deaths": 3, "active": 457, "active_new": 57, "confirmed_new": 57, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 364, "recovered": 124, "deaths": 2, "active": 238, "active_new": -20, "confirmed_new": 7, "recovered_new": 27, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 433, "recovered": 32, "deaths": 4, "active": 397, "active_new": 22, "confirmed_new": 23, "recovered_new": 1, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 381, "recovered": 10, "deaths": 5, "active": 366, "active_new": 18, "confirmed_new": 18, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 451, "recovered": 25, "deaths": 36, "active": 390, "active_new": 37, "confirmed_new": 40, "recovered_new": 0, "deaths_new": 3}, {"state": "Karnataka", "confirmed": 207, "recovered": 30, "deaths": 6, "active": 171, "active_new": 10, "confirmed_new": 10, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 378, "recovered": 33, "deaths": 19, "active": 326, "active_new": 108, "confirmed_new": 116, "recovered_new": 7, "deaths_new": 1}, {"state": "Haryana", "confirmed": 176, "recovered": 36, "deaths": 2, "active": 138, "active_new": 2, "confirmed_new": 6, "recovered_new": 4, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 207, "recovered": 6, "deaths": 4, "active": 197, "active_new": 23, "confirmed_new": 23, "recovered_new": 0, "deaths_new": 0}, {"state": "Punjab", "confirmed": 151, "recovered": 20, "deaths": 11, "active": 120, "active_new": 18, "confirmed_new": 21, "recovered_new": 2, "deaths_new": 1}, {"state": "West Bengal", "confirmed": 116, "recovered": 16, "deaths": 5, "active": 95, "active_new": 13, "confirmed_new": 13, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 48, "recovered": 2, "deaths": 1, "active": 45, "active_new": 4, "confirmed_new": 4, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 60, "recovered": 15, "deaths": 1, "active": 44, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 35, "recovered": 5, "deaths": 0, "active": 30, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 29, "recovered": 0, "deaths": 1, "active": 28, "active_new": -1, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 1}, {"state": "Chandigarh", "confirmed": 19, "recovered": 7, "deaths": 0, "active": 12, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 28, "recovered": 2, "deaths": 2, "active": 24, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 15, "recovered": 11, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 1, "recovered_new": 1, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 11, "recovered": 10, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 18, "recovered": 9, "deaths": 0, "active": 9, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 1, "deaths": 0, "active": 6, "active_new": -1, "confirmed_new": 0, "recovered_new": 1, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 7, "recovered": 1, "deaths": 0, "active": 6, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 14, "recovered": 0, "deaths": 1, "active": 13, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 0, "deaths": 0, "active": 2, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];