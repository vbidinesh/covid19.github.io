const tableDataNested = [{"state": "Maharashtra", "confirmed": 9318, "recovered": 1388, "deaths": 400, "active": 7530, "active_new": 36, "confirmed_new": 36, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 3774, "recovered": 434, "deaths": 181, "active": 3159, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 3314, "recovered": 1078, "deaths": 54, "active": 2182, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Madhya Pradesh", "confirmed": 2481, "recovered": 373, "deaths": 122, "active": 1986, "active_new": 92, "confirmed_new": 94, "recovered_new": 0, "deaths_new": 2}, {"state": "Rajasthan", "confirmed": 2383, "recovered": 781, "deaths": 52, "active": 1550, "active_new": 8, "confirmed_new": 19, "recovered_new": 11, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 2058, "recovered": 1128, "deaths": 25, "active": 905, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 2053, "recovered": 462, "deaths": 34, "active": 1557, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 1332, "recovered": 287, "deaths": 31, "active": 1014, "active_new": 44, "confirmed_new": 73, "recovered_new": 29, "deaths_new": 0}, {"state": "Telangana", "confirmed": 1009, "recovered": 374, "deaths": 25, "active": 610, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 725, "recovered": 119, "deaths": 22, "active": 584, "active_new": 18, "confirmed_new": 28, "recovered_new": 10, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 565, "recovered": 176, "deaths": 8, "active": 381, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 532, "recovered": 215, "deaths": 20, "active": 297, "active_new": 1, "confirmed_new": 9, "recovered_new": 8, "deaths_new": 0}, {"state": "Kerala", "confirmed": 486, "recovered": 359, "deaths": 4, "active": 123, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 366, "recovered": 64, "deaths": 2, "active": 300, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Punjab", "confirmed": 342, "recovered": 101, "deaths": 19, "active": 222, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 308, "recovered": 224, "deaths": 3, "active": 81, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 122, "recovered": 38, "deaths": 1, "active": 83, "active_new": 4, "confirmed_new": 4, "recovered_new": 0, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 105, "recovered": 19, "deaths": 3, "active": 83, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 56, "recovered": 17, "deaths": 0, "active": 39, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 54, "recovered": 34, "deaths": 0, "active": 20, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 40, "recovered": 25, "deaths": 2, "active": 13, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 38, "recovered": 27, "deaths": 1, "active": 10, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 38, "recovered": 34, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 15, "deaths": 0, "active": 18, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 22, "recovered": 16, "deaths": 0, "active": 6, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 12, "recovered": 0, "deaths": 1, "active": 11, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 8, "recovered": 5, "deaths": 0, "active": 3, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 7, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 2, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];