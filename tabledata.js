const tableDataNested = [{"state": "Maharashtra", "confirmed": 1761, "recovered": 208, "deaths": 127, "active": 1426, "active_new": 150, "confirmed_new": 187, "recovered_new": 20, "deaths_new": 17}, {"state": "Tamil Nadu", "confirmed": 969, "recovered": 44, "deaths": 10, "active": 915, "active_new": 57, "confirmed_new": 58, "recovered_new": 0, "deaths_new": 1}, {"state": "Delhi", "confirmed": 1069, "recovered": 27, "deaths": 19, "active": 1023, "active_new": 161, "confirmed_new": 166, "recovered_new": 0, "deaths_new": 5}, {"state": "Telangana", "confirmed": 503, "recovered": 96, "deaths": 14, "active": 393, "active_new": -37, "confirmed_new": 16, "recovered_new": 51, "deaths_new": 2}, {"state": "Rajasthan", "confirmed": 678, "recovered": 116, "deaths": 8, "active": 554, "active_new": 56, "confirmed_new": 117, "recovered_new": 56, "deaths_new": 5}, {"state": "Kerala", "confirmed": 373, "recovered": 143, "deaths": 2, "active": 228, "active_new": -10, "confirmed_new": 9, "recovered_new": 19, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 452, "recovered": 45, "deaths": 5, "active": 402, "active_new": 5, "confirmed_new": 19, "recovered_new": 13, "deaths_new": 1}, {"state": "Andhra Pradesh", "confirmed": 405, "recovered": 10, "deaths": 6, "active": 389, "active_new": 24, "confirmed_new": 24, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 529, "recovered": 39, "deaths": 40, "active": 450, "active_new": 61, "confirmed_new": 78, "recovered_new": 14, "deaths_new": 3}, {"state": "Karnataka", "confirmed": 215, "recovered": 39, "deaths": 6, "active": 170, "active_new": 3, "confirmed_new": 8, "recovered_new": 5, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 468, "recovered": 44, "deaths": 22, "active": 402, "active_new": 76, "confirmed_new": 90, "recovered_new": 11, "deaths_new": 3}, {"state": "Haryana", "confirmed": 179, "recovered": 36, "deaths": 2, "active": 141, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 224, "recovered": 6, "deaths": 4, "active": 214, "active_new": 17, "confirmed_new": 17, "recovered_new": 0, "deaths_new": 0}, {"state": "Punjab", "confirmed": 158, "recovered": 20, "deaths": 12, "active": 126, "active_new": 6, "confirmed_new": 7, "recovered_new": 0, "deaths_new": 1}, {"state": "West Bengal", "confirmed": 126, "recovered": 16, "deaths": 5, "active": 105, "active_new": 10, "confirmed_new": 10, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 50, "recovered": 12, "deaths": 1, "active": 37, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 61, "recovered": 15, "deaths": 1, "active": 45, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 35, "recovered": 5, "deaths": 0, "active": 30, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 29, "recovered": 0, "deaths": 1, "active": 28, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 19, "recovered": 7, "deaths": 0, "active": 12, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 32, "recovered": 8, "deaths": 2, "active": 22, "active_new": -2, "confirmed_new": 4, "recovered_new": 6, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 15, "recovered": 11, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 11, "recovered": 10, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 18, "recovered": 9, "deaths": 0, "active": 9, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 1, "deaths": 0, "active": 6, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 7, "recovered": 1, "deaths": 0, "active": 6, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 17, "recovered": 0, "deaths": 1, "active": 16, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 0, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];