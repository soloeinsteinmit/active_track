from max30102 import max30102
from max30102 import hrcalc

m = max30102.MAX30102()

red, ir = m.read_sequential() # get LEDs readings

print(red, ir)

print('\n\n')

print(f'my heart rate -> {hrcalc.calc_hr_and_spo2(ir[:100], red[:100])}')

m.shutdown()