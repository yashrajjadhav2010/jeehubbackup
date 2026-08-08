const fs = require('fs');

let fileContent = fs.readFileSync('src/App.tsx', 'utf8');

fileContent = fileContent.replace(
  '<SignedIn>\n                <UserButton />\n              </SignedIn>',
  `<SignedIn>
                <Link
                  to="/settings"
                  className="p-2 text-emerald-900/40 hover:text-primary bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors"
                >
                  <User size={16} />
                </Link>
                <div className="relative flex items-center justify-center p-1">
                  {activeRewards?.includes('premium_avatar') && (
                    <div className="holo-avatar-ring pointer-events-none" />
                  )}
                  <div className="relative z-10">
                    <UserButton />
                  </div>
                </div>
              </SignedIn>`
);

fs.writeFileSync('src/App.tsx', fileContent);
