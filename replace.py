import re

with open('/Users/yosss/.gemini/antigravity-ide/brain/8de69417-ffaf-4cf9-99be-445051a70852/scratch/flappy.js', 'r') as f:
    new_func = f.read()

with open('/Users/yosss/Downloads/Landing-page-yos-new/main.js', 'r') as f:
    content = f.read()

# Find the function block using regex
start_marker = "function initFlappyGame() {"
end_marker = "loop();\n  }"
start_idx = content.find(start_marker)
end_idx = content.find(end_marker, start_idx) + len(end_marker)

if start_idx != -1 and end_idx != -1:
    updated_content = content[:start_idx] + new_func + content[end_idx:]
    with open('/Users/yosss/Downloads/Landing-page-yos-new/main.js', 'w') as f:
        f.write(updated_content)
    print("Success")
else:
    print("Could not find the function boundaries.")
