# Project Euler problem 12

# next triangular number

proc ntri {n} {
# get this triangle number
    return [expr {int((pow($n,2)+$n)/2)}]    

}

proc getPrimes {n} {
    set ps [list]
    for {set i 0} {$i < [expr {$n+1}]} {incr i} {
        set rd($i) "r"
    }
        set rd(0) "d"
        set rd(1) "d"
        set p 2
    while {[expr {pow($p,2)}] <= $n} {
	if {$rd($p) == "r"} {
	    for {set j 2} {[expr {$j*$p}] <= $n} {incr j} {
		set rd([expr {$j*$p}]) "d"
	    }
	}
            incr p
    }
    for {set p 2} {$p <= $n} {incr p} {
	if {$rd($p) == "r"} {
                lappend ps $p
	}
    }
array unset rd
return $ps
}



proc ndiv {n} {
# get the primes below n
    set primes [getPrimes $n]
set k 0
# get which of those primes are factors
    for {set i 0} {$i < [llength $primes]} { incr i} {
	set prime [lindex $primes $i]
	if {[expr {$n % $prime}] == 0} {
	    puts "$prime is a prime factor of ${n}!"
	    set pf($k) $prime
	    incr k
	}
    }
set num $n
#figure out how many times each prime factor goes into n
    for {set j [expr {$k-1}]} {$j > -1} {incr j -1} {
	set fac($j) 0
	while {[string equal $num [expr {int($num)}]]} {
	    set num [expr {$num / $pf($j)}]
	    incr  fac($j)
	}
    }
# calculate number of factors from prime factor exponents
set d 1    
    for {set m 0} {$m < $k} {incr m} {
	set d [expr {$d * (1 + pow($pf($m),$fac($j)))}]
    }
return $d
}



set i 3
set divs 0
set numdi 20
while {$divs <= $numdi} {
    set numtri [ntri $i]
    set numdiv [ndiv $numtri]
    puts "$numtri is the ${i}-th triangular number"
    puts "It has $numdiv divisors"
    set divs $numdiv
incr i 
}

puts "The ${i}-th triangular number has over $numdi divisors; [ntri $i]"

exit