const tableDataNested = [{"state": "Maharashtra", "confirmed": 891, "recovered": 70, "deaths": 55, "active": 766, "active_new": 20, "confirmed_new": 23, "recovered_new": 0, "deaths_new": 3}, {"state": "Tamil Nadu", "confirmed": 621, "recovered": 13, "deaths": 6, "active": 602, "active_new": -1, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 1}, {"state": "Delhi", "confirmed": 525, "recovered": 16, "deaths": 7, "active": 502, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 327, "recovered": 59, "deaths": 2, "active": 266, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 364, "recovered": 33, "deaths": 11, "active": 320, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 305, "recovered": 21, "deaths": 3, "active": 281, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 325, "recovered": 25, "deaths": 2, "active": 298, "active_new": 24, "confirmed_new": 24, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 304, "recovered": 5, "deaths": 3, "active": 296, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 268, "recovered": 11, "deaths": 18, "active": 239, "active_new": 9, "confirmed_new": 12, "recovered_new": 0, "deaths_new": 3}, {"state": "Karnataka", "confirmed": 175, "recovered": 20, "deaths": 4, "active": 151, "active_new": 12, "confirmed_new": 12, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 165, "recovered": 23, "deaths": 12, "active": 130, "active_new": 18, "confirmed_new": 19, "recovered_new": 1, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 109, "recovered": 4, "deaths": 2, "active": 103, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 133, "recovered": 29, "deaths": 2, "active": 102, "active_new": 23, "confirmed_new": 23, "recovered_new": 0, "deaths_new": 0}, {"state": "Punjab", "confirmed": 90, "recovered": 4, "deaths": 7, "active": 79, "active_new": 11, "confirmed_new": 11, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 91, "recovered": 13, "deaths": 3, "active": 75, "active_new": 8, "confirmed_new": 11, "recovered_new": 3, "deaths_new": 0}, {"state": "Bihar", "confirmed": 32, "recovered": 9, "deaths": 1, "active": 22, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 27, "recovered": 0, "deaths": 0, "active": 27, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 31, "recovered": 4, "deaths": 0, "active": 27, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 42, "recovered": 2, "deaths": 1, "active": 39, "active_new": 1, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 1}, {"state": "Chandigarh", "confirmed": 18, "recovered": 5, "deaths": 0, "active": 13, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 14, "recovered": 10, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 10, "recovered": 0, "deaths": 0, "active": 10, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 10, "recovered": 8, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 0, "deaths": 0, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 18, "recovered": 1, "deaths": 2, "active": 15, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 5, "recovered": 1, "deaths": 0, "active": 4, "active_new": -1, "confirmed_new": 0, "recovered_new": 1, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 4, "recovered": 0, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];