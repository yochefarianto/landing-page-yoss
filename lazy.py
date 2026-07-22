import re

with open('/Users/yosss/Downloads/Landing-page-yos-new/index.html', 'r') as f:
    html = f.read()

# We want to replace <img with <img loading="lazy"
# BUT only after the hero section (which ends around line 55).
# Let's split the HTML at the end of the hero section.

parts = html.split('<!-- SECTION 1.5: VISUAL SHOWCASE -->')
if len(parts) == 2:
    hero_part = parts[0]
    rest_part = parts[1]
    
    # In rest_part, replace <img with <img loading="lazy"
    # also handle cases where it might already have loading="lazy" to avoid duplication
    rest_part = re.sub(r'<img(?! loading="lazy")', '<img loading="lazy"', rest_part)
    
    with open('/Users/yosss/Downloads/Landing-page-yos-new/index.html', 'w') as f:
        f.write(hero_part + '<!-- SECTION 1.5: VISUAL SHOWCASE -->' + rest_part)
    print("Added lazy loading!")
else:
    print("Could not find section marker")

