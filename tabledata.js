const tableDataNested = [{"state": "Maharashtra", "confirmed": 690, "recovered": 52, "deaths": 35, "active": 603, "active_new": 52, "confirmed_new": 55, "recovered_new": 0, "deaths_new": 3}, {"state": "Tamil Nadu", "confirmed": 485, "recovered": 8, "deaths": 5, "active": 472, "active_new": -2, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 2}, {"state": "Delhi", "confirmed": 445, "recovered": 16, "deaths": 6, "active": 423, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 306, "recovered": 50, "deaths": 2, "active": 254, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 272, "recovered": 33, "deaths": 11, "active": 228, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 234, "recovered": 21, "deaths": 2, "active": 211, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 210, "recovered": 25, "deaths": 1, "active": 184, "active_new": 10, "confirmed_new": 10, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 226, "recovered": 2, "deaths": 1, "active": 223, "active_new": 34, "confirmed_new": 34, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 179, "recovered": 0, "deaths": 11, "active": 168, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 146, "recovered": 11, "deaths": 4, "active": 131, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 122, "recovered": 17, "deaths": 11, "active": 94, "active_new": 6, "confirmed_new": 14, "recovered_new": 7, "deaths_new": 1}, {"state": "Jammu and Kashmir", "confirmed": 106, "recovered": 3, "deaths": 2, "active": 101, "active_new": 14, "confirmed_new": 14, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 84, "recovered": 29, "deaths": 0, "active": 55, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Punjab", "confirmed": 66, "recovered": 3, "deaths": 5, "active": 58, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 53, "recovered": 3, "deaths": 6, "active": 44, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 32, "recovered": 3, "deaths": 1, "active": 28, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 26, "recovered": 0, "deaths": 0, "active": 26, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 22, "recovered": 2, "deaths": 0, "active": 20, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 23, "recovered": 2, "deaths": 0, "active": 21, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 18, "recovered": 3, "deaths": 0, "active": 15, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 14, "recovered": 3, "deaths": 0, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 10, "recovered": 0, "deaths": 0, "active": 10, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 10, "recovered": 7, "deaths": 0, "active": 3, "active_new": -4, "confirmed_new": 0, "recovered_new": 4, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 0, "deaths": 0, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 13, "recovered": 1, "deaths": 2, "active": 10, "active_new": 7, "confirmed_new": 7, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 5, "recovered": 0, "deaths": 0, "active": 5, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 3, "recovered": 0, "deaths": 0, "active": 3, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 0, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];