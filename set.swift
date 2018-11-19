import Foundation

class t_set_of_primes{
    var primes: Set<Int>
    
    init(){
        primes = []
    }
    
    init(_ x: Int){
        primes = [x]
    }
    
    init(_ x: Int, _ y: int){
        
    }
    
    deinit{
        primes = []
    }
    
    func is_prime(_ x: Int)->Bool{
        var d = 2
        while d <= Int(sqrt(Double(x))){
            if x%d == 0 {return false}
            d = d + 1 
        }
        return true
    }
    
    func add(_ x: Int){
        if is_prime(x) {primes.insert(x)}
    }
    
    func reuneste(a: t_set_of_primes)->t_set_of_primes{
        var tmp = t_set_of_primes()
        tmp.primes = primes.union(a.primes)
        return tmp
    }
    
    func print_set(){
        var s = "The set is {"
        for x in primes{
            s = s + String(x) + " "
        }
        s = s + "}"
        print(s)
    }
}

let s_opt = readLine()
if let s = s_opt{
    
    switch s{
        case "1":
            let m = t_set_of_primes()
            m.add(2)
            m.add(3)
            m.add(4)
            m.print_set()
            case "2":
            let m = t_set_of_primes(7)
            m.add(2)
            m.add(3)
            m.add(4)
            m.print_set()
            case "3":
            let m = t_set_of_primes(7, 41)
            m.print_set()
            case "4":
            let m = t_set_of_primes(7, 41)
            let x = t_set_of_primes(90, 100)
            m.reuneste(x)
            m.print_set()
            case "5":
            let m = t_set_of_primes(7, 41)
            let x = t_set_of_primes(90, 100)
            let y = t_set_of_primes(100, 200)
            y = m.reuneste(x)
            y.print_set()
        default:
            print("Invalid input")
    }
    
    
}
else{
    print("no input")
}
