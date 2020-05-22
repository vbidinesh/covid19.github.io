const tableDataNested = [{"state": "Maharashtra", "confirmed": 44582, "recovered": 12583, "deaths": 1517, "active": 30482, "active_new": 2020, "confirmed_new": 2940, "recovered_new": 857, "deaths_new": 63}, {"state": "Tamil Nadu", "confirmed": 14753, "recovered": 7128, "deaths": 99, "active": 7526, "active_new": -64, "confirmed_new": 786, "recovered_new": 846, "deaths_new": 4}, {"state": "Gujarat", "confirmed": 13273, "recovered": 5880, "deaths": 802, "active": 6591, "active_new": -58, "confirmed_new": 363, "recovered_new": 392, "deaths_new": 29}, {"state": "Delhi", "confirmed": 12319, "recovered": 5897, "deaths": 208, "active": 6214, "active_new": 316, "confirmed_new": 660, "recovered_new": 330, "deaths_new": 14}, {"state": "Rajasthan", "confirmed": 6494, "recovered": 3680, "deaths": 153, "active": 2661, "active_new": 70, "confirmed_new": 267, "recovered_new": 195, "deaths_new": 2}, {"state": "Madhya Pradesh", "confirmed": 6170, "recovered": 3089, "deaths": 272, "active": 2809, "active_new": -57, "confirmed_new": 189, "recovered_new": 245, "deaths_new": 1}, {"state": "Uttar Pradesh", "confirmed": 5735, "recovered": 3324, "deaths": 152, "active": 2259, "active_new": 86, "confirmed_new": 220, "recovered_new": 120, "deaths_new": 14}, {"state": "West Bengal", "confirmed": 3332, "recovered": 1221, "deaths": 265, "active": 1846, "active_new": 101, "confirmed_new": 135, "recovered_new": 28, "deaths_new": 6}, {"state": "Andhra Pradesh", "confirmed": 2667, "recovered": 1731, "deaths": 55, "active": 881, "active_new": 35, "confirmed_new": 62, "recovered_new": 26, "deaths_new": 1}, {"state": "Bihar", "confirmed": 2166, "recovered": 629, "deaths": 11, "active": 1526, "active_new": 119, "confirmed_new": 179, "recovered_new": 58, "deaths_new": 2}, {"state": "Punjab", "confirmed": 2029, "recovered": 1847, "deaths": 39, "active": 143, "active_new": -27, "confirmed_new": 1, "recovered_new": 28, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1761, "recovered": 1043, "deaths": 48, "active": 670, "active_new": 52, "confirmed_new": 62, "recovered_new": 7, "deaths_new": 3}, {"state": "Karnataka", "confirmed": 1743, "recovered": 597, "deaths": 41, "active": 1104, "active_new": 112, "confirmed_new": 138, "recovered_new": 26, "deaths_new": 0}, {"state": "State Unassigned", "confirmed": 1620, "recovered": 0, "deaths": 0, "active": 1620, "active_new": 217, "confirmed_new": 217, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 1489, "recovered": 720, "deaths": 20, "active": 749, "active_new": 4, "confirmed_new": 40, "recovered_new": 36, "deaths_new": 0}, {"state": "Odisha", "confirmed": 1189, "recovered": 436, "deaths": 7, "active": 746, "active_new": 43, "confirmed_new": 86, "recovered_new": 43, "deaths_new": 0}, {"state": "Haryana", "confirmed": 1067, "recovered": 706, "deaths": 16, "active": 345, "active_new": 9, "confirmed_new": 36, "recovered_new": 25, "deaths_new": 2}, {"state": "Kerala", "confirmed": 733, "recovered": 512, "deaths": 5, "active": 216, "active_new": 39, "confirmed_new": 42, "recovered_new": 2, "deaths_new": 1}, {"state": "Jharkhand", "confirmed": 323, "recovered": 136, "deaths": 3, "active": 184, "active_new": 20, "confirmed_new": 20, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 260, "recovered": 55, "deaths": 4, "active": 198, "active_new": 47, "confirmed_new": 47, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 219, "recovered": 178, "deaths": 3, "active": 38, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 175, "recovered": 152, "deaths": 0, "active": 23, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 172, "recovered": 62, "deaths": 0, "active": 110, "active_new": 41, "confirmed_new": 44, "recovered_new": 3, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 168, "recovered": 55, "deaths": 4, "active": 106, "active_new": 16, "confirmed_new": 16, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 153, "recovered": 53, "deaths": 1, "active": 99, "active_new": 7, "confirmed_new": 7, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 54, "recovered": 7, "deaths": 0, "active": 47, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 46, "recovered": 43, "deaths": 0, "active": 3, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 26, "recovered": 2, "deaths": 0, "active": 24, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 26, "recovered": 10, "deaths": 0, "active": 16, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 14, "recovered": 12, "deaths": 1, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];