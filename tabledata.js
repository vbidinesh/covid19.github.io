const tableDataNested = [{"state": "Maharashtra", "confirmed": 44582, "recovered": 12583, "deaths": 1517, "active": 30482, "active_new": 2020, "confirmed_new": 2940, "recovered_new": 857, "deaths_new": 63}, {"state": "Tamil Nadu", "confirmed": 14753, "recovered": 7128, "deaths": 99, "active": 7526, "active_new": -64, "confirmed_new": 786, "recovered_new": 846, "deaths_new": 4}, {"state": "Gujarat", "confirmed": 12910, "recovered": 5488, "deaths": 773, "active": 6649, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 12319, "recovered": 5897, "deaths": 208, "active": 6214, "active_new": 316, "confirmed_new": 660, "recovered_new": 330, "deaths_new": 14}, {"state": "Rajasthan", "confirmed": 6377, "recovered": 3542, "deaths": 152, "active": 2683, "active_new": 92, "confirmed_new": 150, "recovered_new": 57, "deaths_new": 1}, {"state": "Madhya Pradesh", "confirmed": 5981, "recovered": 2844, "deaths": 271, "active": 2866, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 5515, "recovered": 3204, "deaths": 138, "active": 2173, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 3332, "recovered": 1221, "deaths": 265, "active": 1846, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 2667, "recovered": 1731, "deaths": 55, "active": 881, "active_new": 35, "confirmed_new": 62, "recovered_new": 26, "deaths_new": 1}, {"state": "Punjab", "confirmed": 2029, "recovered": 1847, "deaths": 39, "active": 143, "active_new": -27, "confirmed_new": 1, "recovered_new": 28, "deaths_new": 0}, {"state": "Bihar", "confirmed": 2105, "recovered": 571, "deaths": 9, "active": 1525, "active_new": 118, "confirmed_new": 118, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1699, "recovered": 1036, "deaths": 45, "active": 618, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 1743, "recovered": 597, "deaths": 41, "active": 1104, "active_new": 112, "confirmed_new": 138, "recovered_new": 26, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 1489, "recovered": 720, "deaths": 20, "active": 749, "active_new": 4, "confirmed_new": 40, "recovered_new": 36, "deaths_new": 0}, {"state": "State Unassigned", "confirmed": 1620, "recovered": 0, "deaths": 0, "active": 1620, "active_new": 217, "confirmed_new": 217, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 1189, "recovered": 436, "deaths": 7, "active": 746, "active_new": 43, "confirmed_new": 86, "recovered_new": 43, "deaths_new": 0}, {"state": "Haryana", "confirmed": 1068, "recovered": 706, "deaths": 16, "active": 346, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 734, "recovered": 512, "deaths": 5, "active": 217, "active_new": 40, "confirmed_new": 43, "recovered_new": 2, "deaths_new": 1}, {"state": "Jharkhand", "confirmed": 308, "recovered": 136, "deaths": 3, "active": 169, "active_new": 5, "confirmed_new": 5, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 219, "recovered": 178, "deaths": 3, "active": 38, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 255, "recovered": 55, "deaths": 4, "active": 193, "active_new": 20, "confirmed_new": 20, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 175, "recovered": 148, "deaths": 0, "active": 27, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 150, "recovered": 53, "deaths": 1, "active": 96, "active_new": 5, "confirmed_new": 5, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 164, "recovered": 55, "deaths": 4, "active": 102, "active_new": 12, "confirmed_new": 12, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 132, "recovered": 59, "deaths": 0, "active": 73, "active_new": 4, "confirmed_new": 4, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 54, "recovered": 7, "deaths": 0, "active": 47, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 44, "recovered": 43, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 25, "recovered": 2, "deaths": 0, "active": 23, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 23, "recovered": 10, "deaths": 0, "active": 13, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 14, "recovered": 12, "deaths": 1, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];