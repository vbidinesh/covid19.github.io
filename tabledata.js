const tableDataNested = [{"state": "Maharashtra", "confirmed": 1297, "recovered": 117, "deaths": 72, "active": 1108, "active_new": 162, "confirmed_new": 162, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 738, "recovered": 21, "deaths": 8, "active": 709, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 669, "recovered": 21, "deaths": 9, "active": 639, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 453, "recovered": 45, "deaths": 11, "active": 397, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 430, "recovered": 45, "deaths": 3, "active": 382, "active_new": 47, "confirmed_new": 47, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 345, "recovered": 84, "deaths": 2, "active": 259, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 361, "recovered": 31, "deaths": 4, "active": 326, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 348, "recovered": 6, "deaths": 3, "active": 339, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 347, "recovered": 25, "deaths": 26, "active": 296, "active_new": 4, "confirmed_new": 6, "recovered_new": 0, "deaths_new": 2}, {"state": "Karnataka", "confirmed": 191, "recovered": 28, "deaths": 6, "active": 157, "active_new": 9, "confirmed_new": 10, "recovered_new": 0, "deaths_new": 1}, {"state": "Gujarat", "confirmed": 241, "recovered": 26, "deaths": 17, "active": 198, "active_new": 53, "confirmed_new": 55, "recovered_new": 1, "deaths_new": 1}, {"state": "Haryana", "confirmed": 168, "recovered": 32, "deaths": 2, "active": 134, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 158, "recovered": 6, "deaths": 3, "active": 149, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Punjab", "confirmed": 117, "recovered": 14, "deaths": 10, "active": 93, "active_new": 10, "confirmed_new": 11, "recovered_new": 0, "deaths_new": 1}, {"state": "West Bengal", "confirmed": 103, "recovered": 16, "deaths": 5, "active": 82, "active_new": 1, "confirmed_new": 4, "recovered_new": 3, "deaths_new": 0}, {"state": "Odisha", "confirmed": 44, "recovered": 2, "deaths": 1, "active": 41, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 51, "recovered": 15, "deaths": 1, "active": 35, "active_new": 12, "confirmed_new": 12, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 35, "recovered": 5, "deaths": 0, "active": 30, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 28, "recovered": 0, "deaths": 0, "active": 28, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 18, "recovered": 7, "deaths": 0, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 28, "recovered": 2, "deaths": 2, "active": 24, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 14, "recovered": 10, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 11, "recovered": 0, "deaths": 0, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 11, "recovered": 9, "deaths": 0, "active": 2, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 0, "deaths": 0, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 5, "recovered": 1, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 13, "recovered": 0, "deaths": 1, "active": 12, "active_new": 8, "confirmed_new": 9, "recovered_new": 0, "deaths_new": 1}, {"state": "Manipur", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];