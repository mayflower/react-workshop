with import <nixpkgs> {};

stdenv.mkDerivation rec {
    name = "ReactSessions";

    buildInputs = [
        git
        nodejs
    ];

    shellHook = ''
      # test -f ./node_modules/.bin/tsc || npm install typescript
      alias gaa="git add -A"
      alias gcmsg="git commit -m"
      alias gl="git pull --rebase"
      alias gp="git push"
      alias gst="git status"
      alias phs="~/Applications/PhpStorm/bin/phpstorm.sh & 2>&1 >/tmp/phpstorm"
      export PATH=$PATH:$HOME/.node_modules/bin
      clear
      echo "### NIX-SHELL IS READY FOR ${name}"
    '';
}
