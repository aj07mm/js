// db.stops.find({"linhas.duracao": 14 },{"linhas.id_linha":1})
var arr = [35, 105, 133, 105, 35, 105, 133, 35, 105, 133, 35, 105, 133, 26, 35, 39, 56, 105, 133, 139, 105, 26, 28, 39, 65, 105, 135, 26, 34, 35, 56, 64, 65, 70, 78, 105, 133, 134, 137, 139, 26, 56, 64, 65, 70, 71, 86, 105, 137, 138, 139, 105, 105, 52, 105, 48, 105, 106, 110, 48, 52, 105, 106, 110, 105, 48, 105, 48, 105, 106, 110, 48, 105, 106, 110, 105, 106, 110, 105, 105, 18, 105, 106, 110, 105, 19, 20, 105, 105, 19, 105, 18, 19, 20, 105, 106, 110, 18, 19, 20, 52, 105, 106, 110, 18, 19, 20, 48, 105, 106, 110, 52, 70, 105, 52, 70, 105, 19, 105, 105, 70, 105, 105, 28, 34, 105, 134, 135, 105, 98, 105, 136, 28, 34, 64, 91, 98, 105, 134, 135, 136, 137, 28, 64, 91, 98, 105, 135, 136, 137, 28, 34, 52, 64, 91, 105, 134, 135, 137, 105, 64, 105, 137, 23, 39, 48, 58, 69, 82, 83, 85, 87, 88, 105, 112, 105, 19, 20, 68, 105, 106, 110, 105, 105, 18, 19, 106, 110, 39, 45, 58, 69, 72, 82, 85, 87, 88, 97, 105, 112, 157, 20, 52, 105, 106, 110, 18, 105, 105, 15, 26, 27, 28, 56, 86, 93, 94, 97, 105, 135, 138, 139, 140, 160, 162, 18, 105, 105, 18, 105, 105, 48, 105, 105, 48, 105, 22, 105, 54, 82, 98, 102, 105, 136, 105, 105, 105, 111, 32, 35, 54, 74, 77, 105, 133, 15, 26, 27, 32, 34, 35, 43, 49, 54, 56, 64, 71, 73, 74, 77, 82, 93, 94, 133, 134, 137, 139, 140, 142, 105, 69, 87, 88, 105, 112, 69, 87, 88, 105, 112, 69, 87, 88, 105, 112, 69, 87, 88, 112, 69, 87, 88, 105, 112, 85, 105, 41, 42, 65, 105, 19, 20, 41, 42, 65, 105, 106, 110, 28, 34, 64, 91, 105, 134, 135, 137, 41, 105, 26, 35, 56, 64, 65, 70, 71, 78, 86, 105, 133, 137, 138, 139, 26, 35, 56, 64, 65, 70, 71, 78, 86, 105, 133, 137, 138, 139, 26, 35, 56, 64, 65, 70, 78, 105, 133, 137, 139, 105, 78, 105, 69, 87, 88, 105, 112, 98, 105, 136, 105, 69, 87, 88, 112, 105, 105, 105, 105, 26, 28, 56, 86, 97, 98, 105, 135, 136, 138, 139, 160, 34, 64, 82, 83, 97, 105, 134, 137, 160, 162, 35, 105, 133, 15, 26, 27, 32, 34, 35, 43, 49, 54, 56, 64, 71, 73, 74, 77, 82, 93, 94, 97, 105, 133, 134, 137, 139, 140, 142, 105, 105, 52, 68, 91, 98, 105, 136, 105, 23, 45, 69, 72, 82, 87, 88, 105, 112, 157, 58, 105, 52, 68, 91, 98, 105, 136, 105, 105, 52, 105, 106, 110, 105, 162, 32, 105, 48, 105, 58, 105, 26, 34, 35, 56, 64, 65, 70, 71, 105, 133, 134, 137, 139, 105, 105, 58, 105, 105, 105, 27, 56, 93, 94, 105, 139, 140, 35, 105, 133, 23, 39, 58, 68, 69, 82, 83, 85, 87, 97, 105, 111, 112, 28, 82, 83, 85, 98, 105, 135, 136, 18, 19, 20, 52, 105, 106, 110, 105, 162, 28, 83, 85, 98, 105, 135, 136, 23, 45, 69, 72, 82, 83, 87, 88, 105, 112, 157, 28, 82, 98, 105, 135, 136, 28, 32, 54, 82, 83, 102, 104, 135, 162, 58, 69, 83, 85, 87, 88, 105, 112, 23, 45, 69, 72, 82, 83, 87, 88, 105, 112, 157, 78, 105, 19, 26, 28, 35, 56, 86, 98, 105, 133, 135, 136, 138, 139, 85, 105, 45, 69, 72, 82, 85, 87, 88, 91, 97, 105, 111, 112, 157, 48, 58, 68, 69, 72, 82, 83, 85, 87, 88, 91, 97, 105, 111, 112, 23, 48, 58, 68, 69, 82, 83, 85, 87, 88, 97, 105, 111, 112, 71, 105, 15, 26, 27, 32, 34, 35, 43, 49, 54, 56, 64, 71, 73, 74, 77, 86, 93, 94, 97, 105, 133, 134, 137, 138, 139, 140, 142, 105, 162, 105, 41, 42, 65, 105, 105, 49, 105, 23, 48, 58, 69, 82, 83, 85, 88, 97, 105, 32, 89, 104, 105, 18, 19, 20, 106, 110, 105, 111, 105, 34, 35, 64, 105, 133, 134, 137, 162, 105, 34, 35, 64, 82, 83, 97, 105, 133, 134, 137, 160, 54, 77, 105, 69, 87, 88, 112, 28, 34, 64, 91, 98, 105, 134, 135, 136, 137, 64, 105, 137, 34, 35, 64, 97, 105, 133, 134, 137, 162, 105, 105, 41, 71, 78, 97, 105, 105, 105, 28, 85, 98, 105, 135, 136, 28, 82, 83, 85, 98, 105, 135, 136, 15, 26, 27, 32, 34, 35, 43, 49, 56, 64, 71, 73, 74, 77, 82, 83, 93, 94, 133, 134, 137, 139, 140, 142, 102, 104, 105, 144, 89, 105, 65, 105, 102, 104, 105, 28, 34, 64, 98, 105, 134, 135, 136, 137, 28, 85, 105, 135, 105, 28, 34, 105, 134, 135, 104, 105, 105, 105, 105, 98, 105, 136, 69, 87, 88, 105, 112, 58, 105, 19, 20, 41, 42, 65, 105, 106, 110, 105, 104, 105, 15, 71, 97, 105, 105, 69, 87, 88, 105, 112, 28, 34, 64, 91, 98, 105, 134, 135, 136, 137, 15, 26, 27, 34, 43, 56, 64, 73, 86, 93, 94, 105, 134, 137, 138, 139, 140, 142, 28, 34, 91, 98, 105, 134, 135, 136, 105, 15, 26, 27, 28, 56, 93, 94, 97, 98, 135, 136, 139, 140, 160, 162, 105, 162, 105, 105, 162, 105, 15, 77, 105, 27, 56, 93, 94, 105, 139, 140, 45, 58, 68, 69, 72, 82, 85, 87, 88, 91, 97, 111, 112, 157, 22, 26, 86, 138, 35, 54, 105, 133, 28, 82, 83, 85, 98, 105, 135, 136, 98, 105, 136, 48, 105, 35, 105, 133, 32, 98, 102, 105, 136, 15, 77, 34, 64, 82, 105, 134, 137, 160, 105, 105, 34, 64, 82, 83, 105, 134, 137, 160, 48, 105, 105, 52, 70, 105, 54, 105, 98, 105, 136, 48, 105, 105, 22, 27, 93, 89, 105, 105, 105, 32, 105, 105, 23, 45, 69, 72, 82, 83, 87, 88, 105, 112, 157, 41, 104, 105, 23, 45, 69, 72, 82, 85, 87, 88, 105, 112, 157, 39, 45, 48, 58, 68, 69, 82, 83, 85, 88, 112, 157, 105, 77, 105, 26, 35, 56, 64, 65, 70, 78, 105, 133, 137, 139, 34, 35, 64, 82, 105, 133, 134, 137, 160, 15, 26, 71, 86, 97, 138, 162, 48, 105, 106, 110, 105, 28, 34, 64, 98, 105, 134, 135, 136, 137, 35, 105, 133, 23, 45, 69, 72, 82, 83, 85, 87, 88, 112, 157, 32, 54, 77, 105, 34, 35, 64, 97, 105, 133, 134, 137, 160, 105, 32, 35, 54, 74, 77, 105, 133, 105, 105, 105, 105, 105, 98, 105, 136, 105, 160, 98, 105, 136, 105, 15, 26, 27, 34, 56, 86, 93, 94, 97, 105, 134, 138, 139, 140, 162, 34, 64, 82, 83, 105, 134, 137, 160, 162, 105, 105, 105, 106, 110, 105, 69, 87, 88, 112, 28, 34, 52, 105, 134, 135, 26, 34, 35, 56, 64, 65, 70, 71, 105, 133, 134, 137, 139, 26, 28, 56, 86, 97, 98, 105, 135, 136, 138, 139, 160, 15, 26, 27, 34, 56, 64, 86, 93, 94, 105, 134, 137, 138, 139, 140, 18, 105, 106, 110, 102, 104, 105, 85, 105, 105, 78, 105, 26, 28, 56, 97, 98, 105, 135, 136, 139, 160, 15, 26, 27, 28, 56, 86, 93, 94, 97, 98, 105, 135, 136, 138, 139, 140, 160, 162, 26, 28, 35, 56, 64, 65, 71, 86, 105, 133, 135, 137, 138, 139, 105, 54, 69, 74, 78, 85, 88, 111, 18, 39, 69, 82, 87, 88, 105, 15, 26, 27, 56, 93, 94, 97, 105, 139, 140, 160, 162, 105, 105, 105, 15, 26, 27, 32, 34, 35, 43, 49, 54, 56, 64, 71, 73, 74, 82, 93, 94, 97, 105, 133, 134, 137, 139, 140, 142, 105, 45, 58, 68, 69, 72, 82, 85, 87, 88, 91, 97, 105, 112, 157, 105, 28, 34, 64, 91, 98, 105, 134, 135, 136, 137, 15, 26, 27, 34, 56, 86, 93, 94, 97, 105, 134, 138, 139, 140, 162, 52, 70, 105, 26, 28, 56, 97, 98, 135, 136, 139, 160, 162, 41, 105, 34, 64, 82, 105, 134, 137, 160, 15, 97, 105, 160, 15, 26, 27, 32, 34, 35, 43, 49, 54, 56, 64, 71, 73, 74, 77, 86, 93, 94, 97, 105, 133, 134, 137, 138, 139, 140, 142, 105, 105, 23, 45, 69, 72, 82, 83, 87, 88, 105, 112, 157, 105, 28, 34, 64, 91, 98, 105, 134, 135, 136, 137, 105, 105, 105, 105, 162, 105, 28, 34, 52, 91, 98, 105, 134, 135, 136, 105, 18, 105, 54, 105, 133 , 133 , 133 , 133 , 39 , 39 , 35 , 64, 106 , 105 , 106 , 106 , 35, 105, 133, 105, 35, 105, 133, 35, 105, 133, 35, 105, 133, 26, 35, 39, 56, 105, 133, 139, 105, 26, 28, 39, 65, 105, 135, 26, 34, 35, 56, 64, 65, 70, 78, 105, 133, 134, 137, 139, 26, 56, 64, 65, 70, 71, 86, 105, 137, 138, 139, 105, 105, 52, 105, 48, 105, 106, 110, 48, 52, 105, 106, 110, 105, 48, 105, 48, 105, 106, 110, 48, 105, 106, 110, 105, 106, 110, 105, 105, 18, 105, 106, 110, 105, 19, 20, 105, 105, 19, 105, 18, 19, 20, 105, 106, 110, 18, 19, 20, 52, 105, 106, 110, 18, 19, 20, 48, 105, 106, 110, 52, 70, 105, 52, 70, 105, 19, 105, 105, 70, 105, 105, 28, 34, 105, 134, 135, 105, 98, 105, 136, 28, 34, 64, 91, 98, 105, 134, 135, 136, 137, 28, 64, 91, 98, 105, 135, 136, 137, 28, 34, 52, 64, 91, 105, 134, 135, 137, 105, 64, 105, 137, 23, 39, 48, 58, 69, 82, 83, 85, 87, 88, 105, 112, 105, 19, 20, 68, 105, 106, 110, 105, 105, 18, 19, 106, 110, 39, 45, 58, 69, 72, 82, 85, 87, 88, 97, 105, 112, 157, 20, 52, 105, 106, 110, 18, 105, 105, 15, 26, 27, 28, 56, 86, 93, 94, 97, 105, 135, 138, 139, 140, 160, 162, 18, 105, 105, 18, 105, 105, 48, 105, 105, 48, 105, 22, 105, 54, 82, 98, 102, 105, 136, 105, 105, 105, 111, 32, 35, 54, 74, 77, 105, 133, 15, 26, 27, 32, 34, 35, 43, 49, 54, 56, 64, 71, 73, 74, 77, 82, 93, 94, 133, 134, 137, 139, 140, 142, 105, 69, 87, 88, 105, 112, 69, 87, 88, 105, 112, 69, 87, 88, 105, 112, 69, 87, 88, 112, 69, 87, 88, 105, 112, 85, 105, 41, 42, 65, 105, 19, 20, 41, 42, 65, 105, 106, 110, 28, 34, 64, 91, 105, 134, 135, 137, 41, 105, 26, 35, 56, 64, 65, 70, 71, 78, 86, 105, 133, 137, 138, 139, 26, 35, 56, 64, 65, 70, 71, 78, 86, 105, 133, 137, 138, 139, 26, 35, 56, 64, 65, 70, 78, 105, 133, 137, 139, 105, 78, 105, 69, 87, 88, 105, 112, 98, 105, 136, 105, 69, 87, 88, 112, 105, 105, 105, 105, 26, 28, 56, 86, 97, 98, 105, 135, 136, 138, 139, 160, 34, 64, 82, 83, 97, 105, 134, 137, 160, 162, 35, 105, 133, 15, 26, 27, 32, 34, 35, 43, 49, 54, 56, 64, 71, 73, 74, 77, 82, 93, 94, 97, 105, 133, 134, 137, 139, 140, 142, 105, 105, 52, 68, 91, 98, 105, 136, 105, 23, 45, 69, 72, 82, 87, 88, 105, 112, 157, 58, 105, 52, 68, 91, 98, 105, 136, 105, 105, 52, 105, 106, 110, 105, 162, 32, 105, 48, 105, 58, 105, 26, 34, 35, 56, 64, 65, 70, 71, 105, 133, 134, 137, 139, 105, 105, 58, 105, 105, 105, 27, 56, 93, 94, 105, 139, 140, 35, 105, 133, 23, 39, 58, 68, 69, 82, 83, 85, 87, 97, 105, 111, 112, 28, 82, 83, 85, 98, 105, 135, 136, 18, 19, 20, 52, 105, 106, 110, 105, 162, 28, 83, 85, 98, 105, 135, 136, 23, 45, 69, 72, 82, 83, 87, 88, 105, 112, 157, 28, 82, 98, 105, 135, 136, 28, 32, 54, 82, 83, 102, 104, 135, 162, 58, 69, 83, 85, 87, 88, 105, 112, 23, 45, 69, 72, 82, 83, 87, 88, 105, 112, 157, 78, 105, 19, 26, 28, 35, 56, 86, 98, 105, 133, 135, 136, 138, 139, 85, 105, 45, 69, 72, 82, 85, 87, 88, 91, 97, 105, 111, 112, 157, 48, 58, 68, 69, 72, 82, 83, 85, 87, 88, 91, 97, 105, 111, 112, 23, 48, 58, 68, 69, 82, 83, 85, 87, 88, 97, 105, 111, 112, 71, 105, 15, 26, 27, 32, 34, 35, 43, 49, 54, 56, 64, 71, 73, 74, 77, 86, 93, 94, 97, 105, 133, 134, 137, 138, 139, 140, 142, 105, 162, 105, 41, 42, 65, 105, 105, 49, 105, 23, 48, 58, 69, 82, 83, 85, 88, 97, 105, 32, 89, 104, 105, 18, 19, 20, 106, 110, 105, 111, 105, 34, 35, 64, 105, 133, 134, 137, 162, 105, 34, 35, 64, 82, 83, 97, 105, 133, 134, 137, 160, 54, 77, 105, 69, 87, 88, 112, 28, 34, 64, 91, 98, 105, 134, 135, 136, 137, 64, 105, 137, 34, 35, 64, 97, 105, 133, 134, 137, 162, 105, 105, 41, 71, 78, 97, 105, 105, 105, 28, 85, 98, 105, 135, 136, 28, 82, 83, 85, 98, 105, 135, 136, 15, 26, 27, 32, 34, 35, 43, 49, 56, 64, 71, 73, 74, 77, 82, 83, 93, 94, 133, 134, 137, 139, 140, 142, 102, 104, 105, 144, 89, 105, 65, 105, 102, 104, 105, 28, 34, 64, 98, 105, 134, 135, 136, 137, 28, 85, 105, 135, 105, 28, 34, 105, 134, 135, 104, 105, 105, 105, 105, 98, 105, 136, 69, 87, 88, 105, 112, 58, 105, 19, 20, 41, 42, 65, 105, 106, 110, 105, 104, 105, 15, 71, 97, 105, 105, 69, 87, 88, 105, 112, 28, 34, 64, 91, 98, 105, 134, 135, 136, 137, 15, 26, 27, 34, 43, 56, 64, 73, 86, 93, 94, 105, 134, 137, 138, 139, 140, 142, 28, 34, 91, 98, 105, 134, 135, 136, 105, 15, 26, 27, 28, 56, 93, 94, 97, 98, 135, 136, 139, 140, 160, 162, 105, 162, 105, 105, 162, 105, 15, 77, 105, 27, 56, 93, 94, 105, 139, 140, 45, 58, 68, 69, 72, 82, 85, 87, 88, 91, 97, 111, 112, 157, 22, 26, 86, 138, 35, 54, 105, 133, 28, 82, 83, 85, 98, 105, 135, 136, 98, 105, 136, 48, 105, 35, 105, 133, 32, 98, 102, 105, 136, 15, 77, 34, 64, 82, 105, 134, 137, 160, 105, 105, 34, 64, 82, 83, 105, 134, 137, 160, 48, 105, 105, 52, 70, 105, 54, 105, 98, 105, 136, 48, 105, 105, 22, 27, 93, 89, 105, 105, 105, 32, 105, 105, 23, 45, 69, 72, 82, 83, 87, 88, 105, 112, 157, 41, 104, 105, 23, 45, 69, 72, 82, 85, 87, 88, 105, 112, 157, 39, 45, 48, 58, 68, 69, 82, 83, 85, 88, 112, 157, 105, 77, 105, 26, 35, 56, 64, 65, 70, 78, 105, 133, 137, 139, 34, 35, 64, 82, 105, 133, 134, 137, 160, 15, 26, 71, 86, 97, 138, 162, 48, 105, 106, 110, 105, 28, 34, 64, 98, 105, 134, 135, 136, 137, 35, 105, 133, 23, 45, 69, 72, 82, 83, 85, 87, 88, 112, 157, 32, 54, 77, 105, 34, 35, 64, 97, 105, 133, 134, 137, 160, 105, 32, 35, 54, 74, 77, 105, 133, 105, 105, 105, 105, 105, 98, 105, 136, 105, 160, 98, 105, 136, 105, 15, 26, 27, 34, 56, 86, 93, 94, 97, 105, 134, 138, 139, 140, 162, 34, 64, 82, 83, 105, 134, 137, 160, 162, 105, 105, 105, 106, 110, 105, 69, 87, 88, 112, 28, 34, 52, 105, 134, 135, 26, 34, 35, 56, 64, 65, 70, 71, 105, 133, 134, 137, 139, 26, 28, 56, 86, 97, 98, 105, 135, 136, 138, 139, 160, 15, 26, 27, 34, 56, 64, 86, 93, 94, 105, 134, 137, 138, 139, 140, 18, 105, 106, 110, 102, 104, 105, 85, 105, 105, 78, 105, 26, 28, 56, 97, 98, 105, 135, 136, 139, 160, 15, 26, 27, 28, 56, 86, 93, 94, 97, 98, 105, 135, 136, 138, 139, 140, 160, 162, 26, 28, 35, 56, 64, 65, 71, 86, 105, 133, 135, 137, 138, 139, 105, 54, 69, 74, 78, 85, 88, 111, 18, 39, 69, 82, 87, 88, 105, 15, 26, 27, 56, 93, 94, 97, 105, 139, 140, 160, 162, 105, 105, 105, 15, 26, 27, 32, 34, 35, 43, 49, 54, 56, 64, 71, 73, 74, 82, 93, 94, 97, 105, 133, 134, 137, 139, 140, 142, 105, 45, 58, 68, 69, 72, 82, 85, 87, 88, 91, 97, 105, 112, 157, 105, 28, 34, 64, 91, 98, 105, 134, 135, 136, 137, 15, 26, 27, 34, 56, 86, 93, 94, 97, 105, 134, 138, 139, 140, 162, 52, 70, 105, 26, 28, 56, 97, 98, 135, 136, 139, 160, 162, 41, 105, 34, 64, 82, 105, 134, 137, 160, 15, 97, 105, 160, 15, 26, 27, 32, 34, 35, 43, 49, 54, 56, 64, 71, 73, 74, 77, 86, 93, 94, 97, 105, 133, 134, 137, 138, 139, 140, 142, 105, 105, 23, 45, 69, 72, 82, 83, 87, 88, 105, 112, 157, 105, 28, 34, 64, 91, 98, 105, 134, 135, 136, 137, 105, 105, 105, 105, 162, 105, 28, 34, 52, 91, 98, 105, 134, 135, 136, 105, 18, 105, 54, 105]
arr = arr.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
})
console.log(arr.length)//length == 66/118

// db.lines.find({ stopsvolta: [], stopsida: [] }, { id_linha: 1}).toArray().length()
// db.lines.find({ stopsvolta: [], stopsida: [] }, { id_linha: 1}).length() // 52
// db.lines.find({ stopsvolta: { $ne: [] }, stopsida: { $ne: [] } }).length() // 59
// db.lines.find({ stopsvolta: { $ne: [] }}).length() //61
// db.lines.find({ stopsida: { $ne: [] }}).length() //64
// db.lines.find({}).length() // 118

//nao estao em stops
var dontHaveStopsRoute = [95, 159, 184, 30, 107, 47, 40, 96, 101, 29, 109, 117, 118, 119, 120, 121, 130, 153, 141, 145, 186, 187, 188, 189, 190, 191, 192, 193, 207, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 208, 209, 210, 211, 212, 213, 214, 215, 216,]
var haveStopsRoute = [15, 54, 18, 20, 19, 22, 23, 27, 28, 135, 32, 34, 134, 35, 65, 39, 43, 133, 45, 157, 48, 49, 52, 74, 69, 68, 64, 137, 89, 71, 73, 142, 93, 94, 140, 77, 78, 82, 83, 85, 87, 88, 41, 56, 139, 86, 138, 58, 70, 26, 98, 136, 106, 110, 111, 72, 160, 104, 162]
var missingDuration = [ 105, 139, 18, 106, 110, 22, 82, 32, 35, 49, 54, 74, 133, 88, 19, 20, 42, 137, 78, 52, 65, 70, 83, 98, 136, 48, 68, 89, 104, 111, 41, 144, 34, 43, 64, 73, 134, 142, 94, 140, 45, 91, 157, 26, 86, 138, 85, 15, 77, 27, 93, 58, 71, 23, 102, 69, 39, 87, 72, 112, 28, 56, 97, 135, 160, 162 ]
missingDuration = missingDuration.filter(function(n) {
    return dontHaveStopsRoute.indexOf(n) != -1;
});

console.log('Nao tem como preencher:' + missingDuration)