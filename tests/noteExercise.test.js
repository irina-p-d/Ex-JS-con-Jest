
import { returnNote } from "../src/noteExercise";
    
    describe('shoud return the grade according to the note', ()=> {
        test("Testing for note: 0-3", () => {
            let point = 0.5;
            let result = returnNote(point);
            expect(result).toEqual("Muy deficiente");
            
        });
        test("Testing for note: 3-5", () => {
            let point = 4;
            let result = returnNote(point);
            expect(result).toEqual("Insuficiente");
            
        });
        test("Testing for note: 5-6", () => {
            let point = 5.2;
            let result = returnNote(point);
            expect(result).toEqual("Suficiente");
            
        });
        test("Testing for note: 6-7", () => {
            let point = 6.2;
            let result = returnNote(point);
            expect(result).toEqual("Bien");
            
        });
        test("Testing for note: 7-9", () => {
            let point = 8.3;
            let result = returnNote(point);
            expect(result).toEqual("Notable");
            
        });
        test("Testing for note: 9-10", () => {
            let point = 9.9;
            let result = returnNote(point);
            expect(result).toEqual("Sobresaliente");
            
        });
        
    });
    
    