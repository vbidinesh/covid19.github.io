const tableDataNested = [{"state": "Maharashtra", "confirmed": 781, "recovered": 56, "deaths": 45, "active": 680, "active_new": 33, "confirmed_new": 33, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 571, "recovered": 8, "deaths": 5, "active": 558, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 503, "recovered": 16, "deaths": 7, "active": 480, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 314, "recovered": 56, "deaths": 2, "active": 256, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 334, "recovered": 33, "deaths": 11, "active": 290, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 278, "recovered": 21, "deaths": 3, "active": 254, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 274, "recovered": 25, "deaths": 1, "active": 248, "active_new": 8, "confirmed_new": 8, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 252, "recovered": 5, "deaths": 1, "active": 246, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 193, "recovered": 3, "deaths": 14, "active": 176, "active_new": -1, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 1}, {"state": "Karnataka", "confirmed": 151, "recovered": 11, "deaths": 4, "active": 136, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 144, "recovered": 21, "deaths": 11, "active": 112, "active_new": 16, "confirmed_new": 16, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 106, "recovered": 4, "deaths": 2, "active": 100, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 90, "recovered": 29, "deaths": 0, "active": 61, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Punjab", "confirmed": 68, "recovered": 4, "deaths": 7, "active": 57, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 80, "recovered": 10, "deaths": 3, "active": 67, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 32, "recovered": 3, "deaths": 1, "active": 28, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 26, "recovered": 0, "deaths": 0, "active": 26, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 26, "recovered": 4, "deaths": 0, "active": 22, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 39, "recovered": 2, "deaths": 0, "active": 37, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 18, "recovered": 5, "deaths": 0, "active": 13, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 14, "recovered": 3, "deaths": 0, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 10, "recovered": 0, "deaths": 0, "active": 10, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 10, "recovered": 8, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 0, "deaths": 0, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 13, "recovered": 1, "deaths": 2, "active": 10, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 5, "recovered": 0, "deaths": 0, "active": 5, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 4, "recovered": 0, "deaths": 0, "active": 4, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 0, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];