
import { returnResult } from "../src/ageExercise";
    describe('shoud return Puedes conducir', ()=> {
        test("Testing for age: 18 ", () => {
            let age = 18;
            let result = returnResult(age);
            expect(result).toEqual("Puedes conducir");
            
        });
        test("Testing for age: 15 ", () => {
            let age = 15;
            let result = returnResult(age);
            expect(result).toEqual("No puedes conducir");
            
            });
        test("Testing for age: 35 ", () => {
            let age = 35;
            let result = returnResult(age);
            expect(result).toEqual("Puedes conducir");
            
            });
    });
    
    