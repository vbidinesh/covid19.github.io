const tableDataNested = [{"state": "Maharashtra", "confirmed": 1346, "recovered": 117, "deaths": 81, "active": 1148, "active_new": 202, "confirmed_new": 211, "recovered_new": 0, "deaths_new": 9}, {"state": "Tamil Nadu", "confirmed": 834, "recovered": 27, "deaths": 8, "active": 799, "active_new": 90, "confirmed_new": 96, "recovered_new": 6, "deaths_new": 0}, {"state": "Delhi", "confirmed": 720, "recovered": 25, "deaths": 12, "active": 683, "active_new": 44, "confirmed_new": 51, "recovered_new": 4, "deaths_new": 3}, {"state": "Telangana", "confirmed": 471, "recovered": 45, "deaths": 11, "active": 415, "active_new": 18, "confirmed_new": 18, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 430, "recovered": 45, "deaths": 3, "active": 382, "active_new": 47, "confirmed_new": 47, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 357, "recovered": 97, "deaths": 2, "active": 258, "active_new": -1, "confirmed_new": 12, "recovered_new": 13, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 410, "recovered": 31, "deaths": 4, "active": 375, "active_new": 49, "confirmed_new": 49, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 363, "recovered": 10, "deaths": 5, "active": 348, "active_new": 11, "confirmed_new": 15, "recovered_new": 4, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 397, "recovered": 25, "deaths": 33, "active": 339, "active_new": 47, "confirmed_new": 56, "recovered_new": 0, "deaths_new": 9}, {"state": "Karnataka", "confirmed": 197, "recovered": 30, "deaths": 6, "active": 161, "active_new": 13, "confirmed_new": 16, "recovered_new": 2, "deaths_new": 1}, {"state": "Gujarat", "confirmed": 262, "recovered": 26, "deaths": 18, "active": 218, "active_new": 73, "confirmed_new": 76, "recovered_new": 1, "deaths_new": 2}, {"state": "Haryana", "confirmed": 170, "recovered": 32, "deaths": 2, "active": 136, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 184, "recovered": 6, "deaths": 4, "active": 174, "active_new": 25, "confirmed_new": 26, "recovered_new": 0, "deaths_new": 1}, {"state": "Punjab", "confirmed": 130, "recovered": 18, "deaths": 10, "active": 102, "active_new": 19, "confirmed_new": 24, "recovered_new": 4, "deaths_new": 1}, {"state": "West Bengal", "confirmed": 103, "recovered": 16, "deaths": 5, "active": 82, "active_new": 1, "confirmed_new": 4, "recovered_new": 3, "deaths_new": 0}, {"state": "Odisha", "confirmed": 44, "recovered": 2, "deaths": 1, "active": 41, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 51, "recovered": 15, "deaths": 1, "active": 35, "active_new": 12, "confirmed_new": 12, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 35, "recovered": 5, "deaths": 0, "active": 30, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 29, "recovered": 0, "deaths": 0, "active": 29, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 18, "recovered": 7, "deaths": 0, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 28, "recovered": 2, "deaths": 2, "active": 24, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 14, "recovered": 10, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 11, "recovered": 0, "deaths": 0, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 18, "recovered": 9, "deaths": 0, "active": 9, "active_new": 8, "confirmed_new": 8, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 0, "deaths": 0, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 5, "recovered": 1, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 13, "recovered": 0, "deaths": 1, "active": 12, "active_new": 8, "confirmed_new": 9, "recovered_new": 0, "deaths_new": 1}, {"state": "Manipur", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];