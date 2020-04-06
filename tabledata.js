const tableDataNested = [{"state": "Maharashtra", "confirmed": 868, "recovered": 56, "deaths": 49, "active": 763, "active_new": 116, "confirmed_new": 120, "recovered_new": 0, "deaths_new": 4}, {"state": "Tamil Nadu", "confirmed": 621, "recovered": 8, "deaths": 5, "active": 608, "active_new": 50, "confirmed_new": 50, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 523, "recovered": 16, "deaths": 7, "active": 500, "active_new": 20, "confirmed_new": 20, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 327, "recovered": 59, "deaths": 2, "active": 266, "active_new": 10, "confirmed_new": 13, "recovered_new": 3, "deaths_new": 0}, {"state": "Telangana", "confirmed": 364, "recovered": 33, "deaths": 11, "active": 320, "active_new": 30, "confirmed_new": 30, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 305, "recovered": 21, "deaths": 3, "active": 281, "active_new": 27, "confirmed_new": 27, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 288, "recovered": 25, "deaths": 2, "active": 261, "active_new": 21, "confirmed_new": 22, "recovered_new": 0, "deaths_new": 1}, {"state": "Andhra Pradesh", "confirmed": 303, "recovered": 5, "deaths": 3, "active": 295, "active_new": 49, "confirmed_new": 51, "recovered_new": 0, "deaths_new": 2}, {"state": "Madhya Pradesh", "confirmed": 193, "recovered": 9, "deaths": 14, "active": 170, "active_new": -7, "confirmed_new": 0, "recovered_new": 6, "deaths_new": 1}, {"state": "Karnataka", "confirmed": 163, "recovered": 20, "deaths": 4, "active": 139, "active_new": 3, "confirmed_new": 12, "recovered_new": 9, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 146, "recovered": 21, "deaths": 11, "active": 114, "active_new": 18, "confirmed_new": 18, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 109, "recovered": 4, "deaths": 2, "active": 103, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 110, "recovered": 29, "deaths": 0, "active": 81, "active_new": 20, "confirmed_new": 20, "recovered_new": 0, "deaths_new": 0}, {"state": "Punjab", "confirmed": 79, "recovered": 4, "deaths": 7, "active": 68, "active_new": 11, "confirmed_new": 11, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 80, "recovered": 10, "deaths": 6, "active": 64, "active_new": -3, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 3}, {"state": "Bihar", "confirmed": 32, "recovered": 3, "deaths": 1, "active": 28, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 26, "recovered": 0, "deaths": 0, "active": 26, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 31, "recovered": 4, "deaths": 0, "active": 27, "active_new": 5, "confirmed_new": 5, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 39, "recovered": 2, "deaths": 0, "active": 37, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 18, "recovered": 5, "deaths": 0, "active": 13, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 14, "recovered": 3, "deaths": 0, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 10, "recovered": 0, "deaths": 0, "active": 10, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 10, "recovered": 8, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 0, "deaths": 0, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 13, "recovered": 1, "deaths": 2, "active": 10, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 5, "recovered": 0, "deaths": 0, "active": 5, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 4, "recovered": 0, "deaths": 0, "active": 4, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 0, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];