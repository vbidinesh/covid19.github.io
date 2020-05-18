const tableDataNested = [{"state": "Maharashtra", "confirmed": 35058, "recovered": 8437, "deaths": 1249, "active": 25372, "active_new": 1205, "confirmed_new": 2005, "recovered_new": 749, "deaths_new": 51}, {"state": "Tamil Nadu", "confirmed": 11760, "recovered": 4406, "deaths": 82, "active": 7272, "active_new": 299, "confirmed_new": 536, "recovered_new": 234, "deaths_new": 3}, {"state": "Gujarat", "confirmed": 11746, "recovered": 4804, "deaths": 694, "active": 6248, "active_new": 26, "confirmed_new": 366, "recovered_new": 305, "deaths_new": 35}, {"state": "Delhi", "confirmed": 10054, "recovered": 4485, "deaths": 160, "active": 5409, "active_new": 4, "confirmed_new": 299, "recovered_new": 283, "deaths_new": 12}, {"state": "Rajasthan", "confirmed": 5507, "recovered": 3218, "deaths": 138, "active": 2151, "active_new": 135, "confirmed_new": 305, "recovered_new": 163, "deaths_new": 7}, {"state": "Madhya Pradesh", "confirmed": 5236, "recovered": 2435, "deaths": 252, "active": 2549, "active_new": 223, "confirmed_new": 259, "recovered_new": 32, "deaths_new": 4}, {"state": "Uttar Pradesh", "confirmed": 4605, "recovered": 2783, "deaths": 118, "active": 1704, "active_new": -12, "confirmed_new": 141, "recovered_new": 147, "deaths_new": 6}, {"state": "West Bengal", "confirmed": 2825, "recovered": 1006, "deaths": 244, "active": 1575, "active_new": 95, "confirmed_new": 148, "recovered_new": 47, "deaths_new": 6}, {"state": "Andhra Pradesh", "confirmed": 2432, "recovered": 1552, "deaths": 50, "active": 830, "active_new": -44, "confirmed_new": 52, "recovered_new": 96, "deaths_new": 0}, {"state": "Punjab", "confirmed": 1980, "recovered": 1547, "deaths": 37, "active": 396, "active_new": -167, "confirmed_new": 16, "recovered_new": 181, "deaths_new": 2}, {"state": "Telangana", "confirmed": 1592, "recovered": 1002, "deaths": 34, "active": 556, "active_new": 31, "confirmed_new": 41, "recovered_new": 10, "deaths_new": 0}, {"state": "Bihar", "confirmed": 1423, "recovered": 473, "deaths": 9, "active": 941, "active_new": 102, "confirmed_new": 103, "recovered_new": 0, "deaths_new": 1}, {"state": "Jammu and Kashmir", "confirmed": 1289, "recovered": 609, "deaths": 15, "active": 665, "active_new": 70, "confirmed_new": 106, "recovered_new": 34, "deaths_new": 2}, {"state": "Karnataka", "confirmed": 1246, "recovered": 530, "deaths": 37, "active": 678, "active_new": 78, "confirmed_new": 99, "recovered_new": 21, "deaths_new": 0}, {"state": "Haryana", "confirmed": 928, "recovered": 598, "deaths": 14, "active": 316, "active_new": -18, "confirmed_new": 18, "recovered_new": 36, "deaths_new": 0}, {"state": "Odisha", "confirmed": 876, "recovered": 277, "deaths": 4, "active": 595, "active_new": -9, "confirmed_new": 48, "recovered_new": 57, "deaths_new": 0}, {"state": "Kerala", "confirmed": 631, "recovered": 497, "deaths": 4, "active": 130, "active_new": 29, "confirmed_new": 29, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 228, "recovered": 127, "deaths": 3, "active": 98, "active_new": -9, "confirmed_new": 5, "recovered_new": 14, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 196, "recovered": 54, "deaths": 3, "active": 139, "active_new": 2, "confirmed_new": 5, "recovered_new": 3, "deaths_new": 0}, {"state": "Tripura", "confirmed": 165, "recovered": 89, "deaths": 0, "active": 76, "active_new": -4, "confirmed_new": 0, "recovered_new": 4, "deaths_new": 0}, {"state": "Assam", "confirmed": 116, "recovered": 42, "deaths": 4, "active": 68, "active_new": 7, "confirmed_new": 8, "recovered_new": 0, "deaths_new": 1}, {"state": "Uttarakhand", "confirmed": 96, "recovered": 52, "deaths": 1, "active": 43, "active_new": 4, "confirmed_new": 4, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 90, "recovered": 42, "deaths": 3, "active": 42, "active_new": 8, "confirmed_new": 10, "recovered_new": 2, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 93, "recovered": 59, "deaths": 0, "active": 34, "active_new": 8, "confirmed_new": 8, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 43, "recovered": 43, "deaths": 0, "active": 0, "active_new": -17, "confirmed_new": 0, "recovered_new": 17, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 38, "recovered": 7, "deaths": 0, "active": 31, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 17, "recovered": 9, "deaths": 0, "active": 8, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 13, "recovered": 12, "deaths": 1, "active": 0, "active_new": -1, "confirmed_new": 0, "recovered_new": 1, "deaths_new": 0}, {"state": "Manipur", "confirmed": 7, "recovered": 2, "deaths": 0, "active": 5, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];