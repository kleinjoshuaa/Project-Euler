proc setPrimes {n} {
	set t0 [clock seconds]
	#global prime
	#set prime 
	set q 0
	set primes [dict create]
	set rd [dict create]
# sets prime(q) as the i-th prime
    for {set i 0} {$i < [expr {$n+1}]} {incr i} {
	dict set rd $i "r"
    }
	dict set rd 0 "d"
	dict set rd 1 "d"
	set p 2
	while {[expr {pow($p,2)}] <= $n} {
	    if {[dict get $rd $p] == "r"} {
		for {set j 2} {[expr {$j*$p}] <= $n} {incr j} {
		    dict set rd [expr {$j*$p}] "d"
		}
	    } 
	    incr p
	}
	for {set p 2} {$p <= $n} {incr p} {
	    if {[dict get $rd $p] == "r"} {
		dict set primes $q $p
		incr q
		#set $prime($q) $p
	    }
	} 
set rd [dict create]
	set t1 [clock seconds]
	puts "setPrimes time [expr {$t1 - $t0}]"
return $primes
}

proc numTri {n} {
	#	set t0 [clock seconds]
    # this is the n-th triangle number
	set r [expr {int((pow($n,2) + $n)/2)}]
	#set t1 [clock seconds]
	#puts "numTri time [expr {$t1 - $t0}]"
	return $r
} 


proc priFact {n} {

    # returns the powers of the prime factorization of n
	set plist [dict create]
	#get the primes less than n/2
	set n2 [expr {1+int(($n/2))}]
	set primes [setPrimes $n2]
	#set t0 [clock seconds]
	#puts $primes
	# decrementer
	set ndec $n
	set dictidx 0
	for {set i 0} {$i < [dict size $primes]} {incr i} {
		# this gives you the prime number in the index of i
		set prime [dict get $primes $i]
		# does it divide n evenly? If not then continue
		if {[expr {fmod($n,$prime)}] != 0} {continue}
		# since it does divide evenly, lets divide until it doesn't
		# setup counter variable
		set j 0
		while {[expr {fmod($ndec,$prime)}] == 0} {
			set ndec [expr {$ndec / $prime}]
			incr j
		}
		# now we have j, which is how many times this prime goes into n
		# and we have ndec, which is the remainder of the number to be factored
		
		# j is added to the list of prime factorization exponents
		# dec is persistent and is used the next time for finding 
		# how many times the prime goes into the composite
		dict set plist $dictidx $j
		incr dictidx
	}
	#set t1 [clock seconds]
	#puts "priFact time [expr {$t1 - $t0}]"
	return $plist
}

proc numDiv {n} {

	#returns the number of divisors of n
	set pfactor [priFact $n]
	#set t0 [clock seconds]
	#puts "exponents of factors is $pfactor"
	set divs 1
	for {set i 0} {$i < [dict size $pfactor]} {incr i} {
		set divs [expr {int(1+[dict get $pfactor $i])*$divs}]
	}
	#set t1 [clock seconds]
	
	#puts "numDiv time [expr {$t1 - $t0}]"
	return $divs
}

set i 0
set n 1
set divisors 0

[numDiv [numTri 3500]]

# while {$divisors < 500} {
	# set tri [numTri $n]
	# # puts $tri
	# set divisors [numDiv $tri]
	# # puts $divisors
	# puts "$tri, the ${n}-th triangular number has $divisors divisors"
	# incr n
# }
exit