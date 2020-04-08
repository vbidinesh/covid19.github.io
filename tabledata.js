const tableDataNested = [{"state": "Maharashtra", "confirmed": 1135, "recovered": 117, "deaths": 72, "active": 946, "active_new": 109, "confirmed_new": 117, "recovered_new": 0, "deaths_new": 8}, {"state": "Tamil Nadu", "confirmed": 738, "recovered": 21, "deaths": 8, "active": 709, "active_new": 45, "confirmed_new": 48, "recovered_new": 2, "deaths_new": 1}, {"state": "Delhi", "confirmed": 669, "recovered": 21, "deaths": 9, "active": 639, "active_new": 92, "confirmed_new": 93, "recovered_new": 1, "deaths_new": 0}, {"state": "Telangana", "confirmed": 453, "recovered": 45, "deaths": 11, "active": 397, "active_new": 49, "confirmed_new": 49, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 383, "recovered": 25, "deaths": 2, "active": 356, "active_new": 40, "confirmed_new": 40, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 345, "recovered": 84, "deaths": 2, "active": 259, "active_new": -4, "confirmed_new": 9, "recovered_new": 13, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 361, "recovered": 31, "deaths": 4, "active": 326, "active_new": 18, "confirmed_new": 29, "recovered_new": 10, "deaths_new": 1}, {"state": "Andhra Pradesh", "confirmed": 348, "recovered": 6, "deaths": 3, "active": 339, "active_new": 33, "confirmed_new": 34, "recovered_new": 1, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 341, "recovered": 25, "deaths": 24, "active": 292, "active_new": 44, "confirmed_new": 51, "recovered_new": 4, "deaths_new": 3}, {"state": "Karnataka", "confirmed": 181, "recovered": 28, "deaths": 5, "active": 148, "active_new": 2, "confirmed_new": 6, "recovered_new": 3, "deaths_new": 1}, {"state": "Gujarat", "confirmed": 186, "recovered": 25, "deaths": 16, "active": 145, "active_new": 9, "confirmed_new": 11, "recovered_new": 0, "deaths_new": 2}, {"state": "Haryana", "confirmed": 167, "recovered": 32, "deaths": 2, "active": 133, "active_new": 23, "confirmed_new": 24, "recovered_new": 1, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 158, "recovered": 6, "deaths": 3, "active": 149, "active_new": 31, "confirmed_new": 33, "recovered_new": 2, "deaths_new": 0}, {"state": "Punjab", "confirmed": 106, "recovered": 14, "deaths": 9, "active": 83, "active_new": 6, "confirmed_new": 7, "recovered_new": 0, "deaths_new": 1}, {"state": "West Bengal", "confirmed": 99, "recovered": 13, "deaths": 5, "active": 81, "active_new": 6, "confirmed_new": 8, "recovered_new": 0, "deaths_new": 2}, {"state": "Odisha", "confirmed": 42, "recovered": 2, "deaths": 1, "active": 39, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 39, "recovered": 15, "deaths": 1, "active": 23, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 35, "recovered": 5, "deaths": 0, "active": 30, "active_new": 3, "confirmed_new": 4, "recovered_new": 1, "deaths_new": 0}, {"state": "Assam", "confirmed": 28, "recovered": 0, "deaths": 0, "active": 28, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 18, "recovered": 7, "deaths": 0, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 27, "recovered": 2, "deaths": 2, "active": 23, "active_new": -1, "confirmed_new": 0, "recovered_new": 1, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 14, "recovered": 10, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 11, "recovered": 0, "deaths": 0, "active": 11, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 10, "recovered": 9, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 0, "deaths": 0, "active": 7, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 5, "recovered": 1, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 4, "recovered": 0, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];