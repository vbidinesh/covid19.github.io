const tableDataNested = [{"state": "Maharashtra", "confirmed": 1018, "recovered": 79, "deaths": 64, "active": 875, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 690, "recovered": 19, "deaths": 7, "active": 664, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 576, "recovered": 20, "deaths": 9, "active": 547, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 404, "recovered": 45, "deaths": 11, "active": 348, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 348, "recovered": 25, "deaths": 2, "active": 321, "active_new": 5, "confirmed_new": 5, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 336, "recovered": 71, "deaths": 2, "active": 263, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 332, "recovered": 21, "deaths": 3, "active": 308, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 314, "recovered": 5, "deaths": 3, "active": 306, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 290, "recovered": 21, "deaths": 21, "active": 248, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 175, "recovered": 25, "deaths": 4, "active": 146, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 175, "recovered": 25, "deaths": 14, "active": 136, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 143, "recovered": 31, "deaths": 2, "active": 110, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 125, "recovered": 4, "deaths": 3, "active": 118, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Punjab", "confirmed": 99, "recovered": 14, "deaths": 8, "active": 77, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 91, "recovered": 13, "deaths": 3, "active": 75, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 42, "recovered": 2, "deaths": 1, "active": 39, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 38, "recovered": 15, "deaths": 1, "active": 22, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 31, "recovered": 4, "deaths": 0, "active": 27, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 28, "recovered": 0, "deaths": 0, "active": 28, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 18, "recovered": 7, "deaths": 0, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 27, "recovered": 1, "deaths": 2, "active": 24, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 14, "recovered": 10, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 10, "recovered": 0, "deaths": 0, "active": 10, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 10, "recovered": 9, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 0, "deaths": 0, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 5, "recovered": 1, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 4, "recovered": 0, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];