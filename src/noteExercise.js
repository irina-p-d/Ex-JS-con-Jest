export function returnNote(point){

    if(point >0 && point<3) {
        return "Muy deficiente";
    }

    if(point>=3 && point<5) {
        return "Insuficiente";
    }

    if(point>=5 && point<6) {
        return "Suficiente";
    }
    if(point>=6 && point<7) {
        return "Bien";
    }
    if(point>=7 && point<9) {
        return "Notable";
    }
    if(point>=9 && point<10) {
        return "Sobresaliente";
    }

    
    
    
    
}